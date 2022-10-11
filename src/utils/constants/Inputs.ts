interface TableHeader {
  label: string;
  colSpan?: number;
}

export enum inputTypes {
  Number = 'number',
  Text = 'text',
  File = 'File',
}
export interface AddInputs {
  endAdornment?: string;
  id: string;
  inputType: inputTypes;
  label: string;
}

enum Peppers {
  Cultivar = 'Cultivar',
  Date = 'Date',
  Details = 'Details',
  Heat = 'Heat (SHU)',
  HeatFrom = 'Heat MIN',
  HeatTo = 'Heat MAX',
  ID = 'ID',
  Origin = 'Origin',
  ParentPlant = 'Parent Plant',
  ParentSeed = 'Parent Seed',
  PodPhoto = 'Pod Photo',
  SHU = 'SHU',
  Source = 'Source',
  Species = 'Species',
}

enum CultivarProps {
  Cultivar = 'cultivar',
  HeatFrom = 'heatFrom',
  HeatTo = 'heatTo',
  Origin = 'origin',
  Species = 'species',
}

enum SeedProps {
  Cultivar = 'cultivar',
  Date = 'date',
  Details = 'details',
  ID = 'id',
  Image = 'image',
  ParentSeed = 'parent_seed',
  Source = 'source',
}

export const CultivarTableHeaders: Array<TableHeader> = [
  { label: Peppers.Cultivar },
  { label: Peppers.Species },
  { label: Peppers.Heat, colSpan: 2 },
  { label: Peppers.Origin },
];

export const SeedTableHeaders: Array<TableHeader> = [
  { label: Peppers.ID },
  { label: Peppers.Cultivar },
  { label: Peppers.Date },
  { label: Peppers.Source },
  { label: Peppers.Details },
  { label: Peppers.ParentSeed },
  { label: Peppers.PodPhoto },
];

export const AddCultivarInputs: Array<AddInputs> = [
  {
    id: CultivarProps.Cultivar,
    label: Peppers.Cultivar,
    inputType: inputTypes.Text,
  },
  {
    id: CultivarProps.Species,
    label: Peppers.Species,
    inputType: inputTypes.Text,
  },
  {
    id: CultivarProps.HeatFrom,
    inputType: inputTypes.Number,
    label: Peppers.HeatFrom,
    endAdornment: Peppers.SHU,
  },
  {
    id: CultivarProps.HeatTo,
    inputType: inputTypes.Number,
    label: Peppers.HeatTo,
    endAdornment: Peppers.SHU,
  },
  {
    id: CultivarProps.Origin,
    inputType: inputTypes.Text,
    label: Peppers.Origin,
  },
];

export const AddSeedInputs: Array<AddInputs> = [
  {
    id: SeedProps.ID,
    inputType: inputTypes.Number,
    label: Peppers.ID,
  },
  {
    id: SeedProps.Cultivar,
    inputType: inputTypes.Text,
    label: Peppers.Cultivar,
  },
  {
    id: SeedProps.Date,
    inputType: inputTypes.Text,
    label: Peppers.Date,
  },
  {
    id: SeedProps.Source,
    inputType: inputTypes.Text,
    label: Peppers.Source,
  },
  {
    id: SeedProps.Details,
    inputType: inputTypes.Text,
    label: Peppers.Details,
  },
  {
    id: SeedProps.ParentSeed,
    inputType: inputTypes.Number,
    label: Peppers.ParentSeed,
  },
  {
    id: SeedProps.Image,
    inputType: inputTypes.File,
    label: Peppers.PodPhoto,
  },
];
