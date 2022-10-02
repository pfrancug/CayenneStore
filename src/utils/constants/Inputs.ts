enum Peppers {
  AddCultivar = 'Add cultivar',
  Cultivar = 'Cultivar',
  Heat = 'Heat (SHU)',
  HeatFrom = 'Heat MIN',
  HeatTo = 'Heat MAX',
  Origin = 'Origin',
  SHU = 'SHU',
  Spicies = 'Spicies',
}

enum CultivarProps {
  Cultivar = 'cultivar',
  HeatFrom = 'heatFrom',
  HeatTo = 'heatTo',
  Origin = 'origin',
  Spicies = 'spicies',
}

export const CultivarTableHeaders = [
  { label: Peppers.Cultivar },
  { label: Peppers.Spicies },
  { label: Peppers.Heat, colSpan: 2 },
  { label: Peppers.Origin },
];

export const AddCultivarInputs = [
  { id: CultivarProps.Cultivar, label: Peppers.Cultivar },
  { id: CultivarProps.Spicies, label: Peppers.Spicies },
  {
    id: CultivarProps.HeatFrom,
    label: Peppers.HeatFrom,
    endAdornment: Peppers.SHU,
  },
  {
    id: CultivarProps.HeatTo,
    label: Peppers.HeatTo,
    endAdornment: Peppers.SHU,
  },
  { id: CultivarProps.Origin, label: Peppers.Origin },
];
