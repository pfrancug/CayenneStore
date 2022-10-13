import { InputTypes, Peppers, SeedProps } from 'ts/enums';
import { AddInputs } from 'ts/interfaces';

export const AddSeedInputs: Array<AddInputs> = [
  {
    id: SeedProps.ID,
    inputType: InputTypes.Number,
    label: Peppers.ID,
  },
  {
    id: SeedProps.Cultivar,
    inputType: InputTypes.Text,
    label: Peppers.Cultivar,
  },
  {
    id: SeedProps.Date,
    inputType: InputTypes.Text,
    label: Peppers.Date,
  },
  {
    id: SeedProps.Source,
    inputType: InputTypes.Text,
    label: Peppers.Source,
  },
  {
    id: SeedProps.Details,
    inputType: InputTypes.Text,
    label: Peppers.Details,
  },
  {
    id: SeedProps.ParentSeed,
    inputType: InputTypes.Number,
    label: Peppers.ParentSeed,
  },
  {
    id: SeedProps.Image,
    inputType: InputTypes.File,
    label: Peppers.PodPhoto,
  },
];
