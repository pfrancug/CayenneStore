import { FC, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { containerStyle } from './styles';
import { ErrorAlert } from 'components';
import { useLoadingContext } from 'contexts';
import { cultivarsQuery, CultivarQueryProps } from 'gql';
import { Maybe } from 'schemas';
import { Peppers } from 'utils/constants';

export const Cultivars: FC = () => {
  const { setIsLoading } = useLoadingContext();
  const { data, error, loading } = useQuery<CultivarQueryProps>(cultivarsQuery);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  if (loading) {
    return null;
  }

  if (error) {
    return <ErrorAlert message={error.message} />;
  }

  const { cultivars } = data ?? {};
  const localiseValue = (value?: Maybe<number>) =>
    value ? value.toLocaleString('en-US') : null;

  const columns = [
    { label: Peppers.Cultivar },
    { label: Peppers.Spicies },
    { label: Peppers.Heat, colSpan: 2 },
    { label: Peppers.Origin },
  ];

  if (cultivars) {
    return (
      <TableContainer component={Paper} sx={containerStyle}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              {columns.map(({ colSpan, label }) => (
                <TableCell align="center" colSpan={colSpan} key={label}>
                  {label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {cultivars.map(({ cultivar, origin, scoville_scale, spicies }) => (
              <TableRow key={cultivar}>
                <TableCell component="th" scope="row">
                  {cultivar}
                </TableCell>
                <TableCell>{spicies}</TableCell>
                {scoville_scale?.from === null ? (
                  <TableCell align="center" colSpan={2}>
                    {localiseValue(scoville_scale?.to)}
                  </TableCell>
                ) : (
                  <>
                    <TableCell align="center">
                      {localiseValue(scoville_scale?.from)}
                    </TableCell>
                    <TableCell align="center">
                      {localiseValue(scoville_scale?.to)}
                    </TableCell>
                  </>
                )}
                <TableCell align="center">{origin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return null;
};