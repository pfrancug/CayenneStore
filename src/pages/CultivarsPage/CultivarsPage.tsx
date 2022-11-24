import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { FC, useEffect, useMemo } from 'react';

import {
  cellStyle,
  columnHeaderStyle,
  containerStyle,
  tableHeaderStyle,
} from 'common/table.styles';
import { ErrorAlert, InputForm } from 'components';
import { useLoadingContext, useRealmContext } from 'contexts';
import { useGetCultivars } from 'gql';
import { Maybe } from 'schemas';
import { InputFormType, ProviderTypes } from 'ts/enums';
import { CultivarTableHeaders } from 'utils/constants';

export const CultivarsPage: FC = () => {
  const { data, error, loading, refetch } = useGetCultivars();
  const { setIsLoading } = useLoadingContext();
  const { currentUser } = useRealmContext();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  useEffect(() => {
    if (currentUser?.id) {
      refetch();
    }
  }, [currentUser?.id, refetch]);

  const { cultivars } = data ?? {};

  const sortedCultivars = useMemo(() => {
    if (!cultivars || cultivars.length === 0) {
      return null;
    }

    return [...cultivars].sort((a, b) => {
      if (a.cultivar && b.cultivar) {
        return a.cultivar.localeCompare(b.cultivar);
      }

      return 0;
    });
  }, [cultivars]);

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  if (loading || !sortedCultivars) {
    return null;
  }

  const localiseValue = (value?: Maybe<number>) =>
    value ? value.toLocaleString('en-US') : null;

  return (
    <>
      <TableContainer component={Paper} sx={containerStyle}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {CultivarTableHeaders.map(({ colSpan, label }) => (
                <TableCell
                  align="center"
                  colSpan={colSpan}
                  key={label}
                  sx={tableHeaderStyle}
                >
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedCultivars.map(
              ({ _id, cultivar, origin, scoville_scale, species }) => (
                <TableRow key={_id as string}>
                  <TableCell component="th" scope="row" sx={columnHeaderStyle}>
                    {cultivar}
                  </TableCell>
                  <TableCell sx={cellStyle}>{species}</TableCell>
                  {scoville_scale?.from === null ? (
                    <TableCell align="center" colSpan={2} sx={cellStyle}>
                      {localiseValue(scoville_scale?.to)}
                    </TableCell>
                  ) : (
                    <>
                      <TableCell align="center" sx={cellStyle}>
                        {localiseValue(scoville_scale?.from)}
                      </TableCell>
                      <TableCell align="center" sx={cellStyle}>
                        {localiseValue(scoville_scale?.to)}
                      </TableCell>
                    </>
                  )}
                  <TableCell align="center" sx={cellStyle}>
                    {origin}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {currentUser?.providerType === ProviderTypes.LocalUserpass ? (
        <InputForm type={InputFormType.Cultivar} />
      ) : null}
    </>
  );
};
