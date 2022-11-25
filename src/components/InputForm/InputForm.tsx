/* eslint-disable react/jsx-pascal-case -- MUI feature */
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Unstable_Grid2,
} from '@mui/material';
import { DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { FC, useEffect } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';

import {
  containerStyle,
  gridContainerStyle,
  gridStyle,
  inputStyle,
  submitStyle,
} from './styles';
import { ErrorAlert } from 'components';
import { useLoadingContext, useRealmContext } from 'contexts';
import { useAddCultivar, useAddSeed, useGetCultivars, useGetSeeds } from 'gql';
import { onAddCultivarSubmit, onAddSeedSubmit } from 'helpers';
import { useBreakpoints } from 'hooks';
import { InputFormType, InputTypes, Operations } from 'ts/enums';
import { AddCultivarInputs, AddSeedInputs } from 'utils/constants';

interface InputFormProps {
  type: InputFormType;
}

export const InputForm: FC<InputFormProps> = ({ type }) => {
  const { isUpSmBreakpoint } = useBreakpoints();
  const { control, getValues, register, handleSubmit, reset } = useForm();
  const { loading: cLoading, refetch: cRefetch } = useGetCultivars();
  const { loading: sLoading, refetch: sRefetch } = useGetSeeds();
  const { setIsLoading } = useLoadingContext();
  const { currentUser } = useRealmContext();
  const [
    insertOneCultivar,
    { data: acData, error: acError, loading: acLoading },
  ] = useAddCultivar();
  const [insertOneSeed, { data: asData, error: asError, loading: asLoading }] =
    useAddSeed();
  const newDate = dayjs();

  useEffect(() => {
    setIsLoading(acLoading || asLoading || cLoading || sLoading);
  }, [acLoading, asLoading, cLoading, sLoading, setIsLoading, type]);

  useEffect(() => {
    if (type === InputFormType.Cultivar && acData) {
      cRefetch();
      reset();
    }
  }, [acData, cRefetch, reset, type]);

  useEffect(() => {
    if (type === InputFormType.Seed && asData) {
      sRefetch();
      reset();
    }
  }, [asData, reset, sRefetch, type]);

  const onSubmit = (data: FieldValues) => {
    if (type === InputFormType.Cultivar) {
      onAddCultivarSubmit(data, insertOneCultivar, currentUser);
    }

    if (type === InputFormType.Seed) {
      onAddSeedSubmit(data, insertOneSeed, currentUser);
    }
  };

  const cultivarInputs =
    type === InputFormType.Cultivar ? AddCultivarInputs : null;
  const seedInputs = type === InputFormType.Seed ? AddSeedInputs : null;
  const inputs = cultivarInputs ?? seedInputs;

  if (!inputs || inputs.length === 0) {
    return null;
  }

  return (
    <Container
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={containerStyle}
    >
      {type === InputFormType.Cultivar && acError ? (
        <ErrorAlert maxWidth={700} message={acError.message} />
      ) : null}
      {type === InputFormType.Seed && asError ? (
        <ErrorAlert maxWidth={700} message={asError.message} />
      ) : null}
      <Unstable_Grid2
        container
        columnSpacing={1}
        rowSpacing={1}
        sx={gridContainerStyle}
      >
        {inputs.map(({ endAdornment, id, inputType, label }) => (
          <Unstable_Grid2 key={label} sm={6} xs={12}>
            {inputType === InputTypes.File ? (
              <Button
                color="success"
                component="label"
                variant="outlined"
                sx={inputStyle}
              >
                {label}
                <input {...register(id)} hidden accept="image/*" type="file" />
              </Button>
            ) : (
              <Controller
                control={control}
                defaultValue={inputType === InputTypes.Date ? newDate : ''}
                name={id}
                render={({ field }) => {
                  if (inputType === InputTypes.Date) {
                    return isUpSmBreakpoint ? (
                      <DesktopDatePicker
                        {...field}
                        inputFormat="MM/YY"
                        label={label}
                        openTo="year"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="success"
                            size="small"
                            sx={inputStyle}
                            variant="outlined"
                          />
                        )}
                        value={getValues(field.name)}
                        views={['year', 'month']}
                      />
                    ) : (
                      <MobileDatePicker
                        {...field}
                        inputFormat="MM/YY"
                        label={label}
                        openTo="year"
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="success"
                            size="small"
                            sx={inputStyle}
                            variant="outlined"
                          />
                        )}
                        value={getValues(field.name)}
                        views={['year', 'month']}
                      />
                    );
                  }

                  return (
                    <TextField
                      {...field}
                      color="success"
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
                      type={inputType}
                      variant="outlined"
                    />
                  );
                }}
              />
            )}
          </Unstable_Grid2>
        ))}
        <Unstable_Grid2 sm={inputs.length % 2 ? 6 : 12} xs={12} sx={gridStyle}>
          <Button
            color="success"
            sx={submitStyle}
            type="submit"
            variant="contained"
          >
            {Operations.Submit}
          </Button>
        </Unstable_Grid2>
      </Unstable_Grid2>
    </Container>
  );
};
