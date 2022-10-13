import { Peppers } from 'ts/enums';
import { TableHeader } from 'ts/interfaces';

export const CultivarTableHeaders: Array<TableHeader> = [
  { label: Peppers.Cultivar },
  { label: Peppers.Species },
  { label: Peppers.Heat, colSpan: 2 },
  { label: Peppers.Origin },
];
