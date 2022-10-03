/* eslint-disable react/jsx-pascal-case -- MUI feature */
import { FC, useEffect } from 'react';
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Unstable_Grid2,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

import {
  containerStyle,
  gridContainerStyle,
  gridStyle,
  inputStyle,
  submitStyle,
} from './styles';
import { ErrorAlert } from 'components';
import { useLoadingContext, useRealmContext } from 'contexts';
import { useAddCultivar, useGetCultivars } from 'gql';
import { AddCultivarInputs, Operations } from 'utils/constants';

export const AddCultivar: FC = () => {
  const [insertOneCultivar, { data, error, loading: addCultivarLoading }] =
    useAddCultivar();
  const { loading: cutivarsLoading, refetch } = useGetCultivars();
  const { control, handleSubmit, reset } = useForm();
  const { setIsLoading } = useLoadingContext();
  const { currentUser } = useRealmContext();

  useEffect(() => {
    setIsLoading(addCultivarLoading || cutivarsLoading);
  }, [addCultivarLoading, cutivarsLoading, setIsLoading]);

  useEffect(() => {
    if (data) {
      refetch();
      reset();
    }
  }, [data, refetch, reset]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: Add proper typing.
  const onSubmit = (data: any) => {
    const date = new Date();
    insertOneCultivar({
      variables: {
        data: {
          creation_date: date,
          cultivar: data.cultivar.length ? data.cultivar.trim() : null,
          last_update_date: date,
          origin: data.origin.length ? data.origin.trim() : null,
          scoville_scale: {
            from: data.heatFrom.length ? data.heatFrom : null,
            to: data.heatTo.length ? data.heatTo : null,
          },
          species: data.species.length ? data.species.trim() : null,
          user: currentUser?.id ?? null,
        },
      },
    });
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={containerStyle}
    >
      {error ? <ErrorAlert maxWidth={700} message={error.message} /> : null}
      <Unstable_Grid2
        container
        columnSpacing={1}
        rowSpacing={1}
        sx={gridContainerStyle}
      >
        {AddCultivarInputs.map(({ endAdornment, id, label }) => (
          <Unstable_Grid2 key={label} sm={6} xs={12}>
            <Controller
              control={control}
              defaultValue=""
              name={id}
              render={({ field }) => (
                <TextField
                  {...field}
                  color="warning"
                  InputProps={{
                    endAdornment: endAdornment ? (
                      <InputAdornment position="end">
                        {endAdornment}
                      </InputAdornment>
                    ) : null,
                  }}
                  label={label}
                  size="small"
                  sx={inputStyle}
                  type={endAdornment ? 'number' : 'text'}
                  variant="outlined"
                />
              )}
            />
          </Unstable_Grid2>
        ))}
        <Unstable_Grid2 sm={6} xs={12} sx={gridStyle}>
          <Button
            color="warning"
            sx={submitStyle}
            type="submit"
            variant="outlined"
          >
            {Operations.Add}
          </Button>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Container>
  );
};
