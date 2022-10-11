/* eslint-disable react/jsx-pascal-case -- MUI feature */
import { FC, useEffect } from 'react';
import {
  Button,
  Container,
  InputAdornment,
  TextField,
  Unstable_Grid2,
} from '@mui/material';
import Resizer from 'react-image-file-resizer';
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
import { useAddCultivar, useAddSeed, useGetCultivars, useGetSeeds } from 'gql';
import { CultivarInsertInput, SeedInsertInput } from 'schemas';
import {
  AddCultivarInputs,
  AddSeedInputs,
  inputTypes,
  Operations,
} from 'utils/constants';

export enum InputFormType {
  Cultivar,
  Seed,
}

interface InputFormProps {
  type: InputFormType;
}

export const InputForm: FC<InputFormProps> = ({ type }) => {
  const [
    insertOneCultivar,
    { data: acData, error: acError, loading: acLoading },
  ] = useAddCultivar();
  const [insertOneSeed, { data: asData, error: asError, loading: asLoading }] =
    useAddSeed();
  const { loading: cLoading, refetch: cRefetch } = useGetCultivars();
  const { loading: sLoading, refetch: sRefetch } = useGetSeeds();
  const { control, register, handleSubmit, reset } = useForm();
  const { setIsLoading } = useLoadingContext();
  const { currentUser } = useRealmContext();

  useEffect(() => {
    setIsLoading(acLoading || asLoading || cLoading || sLoading);
  }, [acLoading, asLoading, cLoading, sLoading, setIsLoading, type]);

  useEffect(() => {
    if (type === InputFormType.Cultivar && acData) {
      cRefetch();
      reset();
    }

    if (type === InputFormType.Seed && asData) {
      sRefetch();
      reset();
    }
  }, [acData, asData, cRefetch, reset, sRefetch, type]);

  const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1024,
        1024,
        'JPEG',
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        'base64',
      );
    });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: Add proper typing.
  const onAddCultivarSubmit = (data: any) => {
    const date = new Date();

    insertOneCultivar({
      variables: {
        data: {
          creation_date: date,
          cultivar: data.cultivar.length ? data.cultivar.trim() : null,
          last_update_date: date,
          origin: data.origin.length ? data.origin.trim() : null,
          owner_id: currentUser?.id ?? null,
          scoville_scale: {
            from: data.heatFrom.length ? data.heatFrom : null,
            to: data.heatTo.length ? data.heatTo : null,
          },
          species: data.species.length ? data.species.trim() : null,
        } as CultivarInsertInput,
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: Add proper typing.
  const onAddSeedSubmit = async (data: any) => {
    const date = new Date();
    const file = data.image[0];
    let image = null;

    if (file) {
      try {
        image = (await resizeFile(file)) as string;
      } catch (error) {
        console.error(error);
      }
    }

    insertOneSeed({
      variables: {
        data: {
          creation_date: date,
          cultivar: data.cultivar.length ? data.cultivar.trim() : null,
          id: data.id.trim().length ? data.id.trim() : null,
          image,
          last_update_date: date,
          owner_id: currentUser?.id ?? null,
          parent: data.parent.trim().length ? data.parent.trim() : null,
          source: data.source.trim().length ? data.source.trim() : null,
        } as SeedInsertInput,
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- TODO: Add proper typing.
  const onSubmit = (data: any) => {
    if (type === InputFormType.Cultivar) {
      onAddCultivarSubmit(data);
    }
    if (type === InputFormType.Seed) {
      onAddSeedSubmit(data);
    }
  };

  const cultivarInputs =
    type === InputFormType.Cultivar ? AddCultivarInputs : null;
  const seedInputs = type === InputFormType.Seed ? AddSeedInputs : null;
  const inputs = cultivarInputs ?? seedInputs;

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
        {inputs?.map(({ endAdornment, id, inputType, label }) => (
          <Unstable_Grid2 key={label} sm={6} xs={12}>
            {inputType === inputTypes.File ? (
              <Button
                color="success"
                component="label"
                variant="outlined"
                sx={inputStyle}
              >
                {label}
                <input
                  {...register(id)}
                  hidden
                  accept="image/*"
                  // onChange={changeHandler}
                  type="file"
                />
              </Button>
            ) : (
              <Controller
                control={control}
                defaultValue=""
                name={id}
                render={({ field }) => {
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
        <Unstable_Grid2 sm={6} xs={12} sx={gridStyle}>
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
