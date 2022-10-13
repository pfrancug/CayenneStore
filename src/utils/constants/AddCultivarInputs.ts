import { CultivarProps, InputTypes, Peppers } from 'ts/enums';
import { AddInputs } from 'ts/interfaces';

export const AddCultivarInputs: Array<AddInputs> = [
  {
    id: CultivarProps.Cultivar,
    label: Peppers.Cultivar,
    inputType: InputTypes.Text,
  },
  {
    id: CultivarProps.Species,
    label: Peppers.Species,
    inputType: InputTypes.Text,
  },
  {
    id: CultivarProps.HeatFrom,
    inputType: InputTypes.Number,
    label: Peppers.HeatFrom,
    endAdornment: Peppers.SHU,
  },
  {
    id: CultivarProps.HeatTo,
    inputType: InputTypes.Number,
    label: Peppers.HeatTo,
    endAdornment: Peppers.SHU,
  },
  {
    id: CultivarProps.Origin,
    inputType: InputTypes.Text,
    label: Peppers.Origin,
  },
];
