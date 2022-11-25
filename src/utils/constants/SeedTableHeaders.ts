import { Peppers } from 'ts/enums';
import { TableHeader } from 'ts/interfaces';

export const SeedTableHeaders: Array<TableHeader> = [
  { label: Peppers.ID },
  { label: Peppers.Cultivar },
  { label: Peppers.Date },
  { label: Peppers.Source },
  { label: Peppers.ParentSeed },
  { label: Peppers.PodPhoto },
];
