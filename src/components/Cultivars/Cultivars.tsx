import { FC, useEffect, useMemo } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import {
  cellStyle,
  columnHeaderStyle,
  containerStyle,
  tableHeaderStyle,
} from './styles';
import { AddCultivar, ErrorAlert } from 'components';
import { useLoadingContext, useRealmContext } from 'contexts';
import { useGetCultivars } from 'gql';
import { Maybe } from 'schemas';
import { CultivarTableHeaders, ProviderTypes } from 'utils/constants';

export const Cultivars: FC = () => {
  const { data, error, loading } = useGetCultivars();
  const { setIsLoading } = useLoadingContext();
  const { currentUser } = useRealmContext();

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  const { cultivars } = data ?? {};
  const sortedCultivars = useMemo(
    () =>
      cultivars?.sort((a, b) => {
        if (a.cultivar && b.cultivar) {
          return a.cultivar.localeCompare(b.cultivar);
        }

        return 0;
      }),
    [cultivars],
  );

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  if (loading || !cultivars) {
    return null;
  }

  const localiseValue = (value?: Maybe<number>) =>
    value ? value.toLocaleString('en-US') : null;

  if (sortedCultivars) {
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
              {cultivars.map(
                ({ _id, cultivar, origin, scoville_scale, spicies }) => (
                  <TableRow key={_id as string}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={columnHeaderStyle}
                    >
                      {cultivar}
                    </TableCell>
                    <TableCell sx={cellStyle}>{spicies}</TableCell>
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
          <AddCultivar />
        ) : null}
      </>
    );
  }

  return null;
};
