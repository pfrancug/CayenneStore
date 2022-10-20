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
} from 'common/table.styles';
import { ErrorAlert, InputForm, PodImage } from 'components';
import { useLoadingContext, useRealmContext } from 'contexts';
import { useGetSeeds } from 'gql';
import { InputFormType, ProviderTypes } from 'ts/enums';
import { formatDate } from 'utils';
import { SeedTableHeaders } from 'utils/constants';

export const SeedsPage: FC = () => {
  const { data, error, loading, refetch } = useGetSeeds();
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

  const { seeds } = data ?? {};
  const sortedSeeds = useMemo(() => {
    if (!seeds || seeds.length === 0) {
      return null;
    }
    return [...seeds].sort((a, b) => (a.id && b.id ? a.id - b.id : 0));
  }, [seeds]);

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  if (loading || !sortedSeeds) {
    return null;
  }

  return (
    <>
      <TableContainer component={Paper} sx={containerStyle}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {SeedTableHeaders.map(({ label }) => (
                <TableCell align="center" key={label} sx={tableHeaderStyle}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedSeeds.map(
              ({
                _id,
                cultivar,
                date,
                details,
                id,
                image,
                parent_seed,
                source,
              }) => (
                <TableRow key={_id as string}>
                  <TableCell
                    align="center"
                    component="th"
                    scope="row"
                    sx={columnHeaderStyle}
                  >
                    {id}
                  </TableCell>
                  <TableCell sx={cellStyle}>{cultivar}</TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {formatDate(date)}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {source}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {details}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    {parent_seed}
                  </TableCell>
                  <TableCell align="center" sx={cellStyle}>
                    <PodImage binData={image} name={cultivar} />
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {currentUser?.providerType === ProviderTypes.LocalUserpass ? (
        <InputForm type={InputFormType.Seed} />
      ) : null}
    </>
  );
};
