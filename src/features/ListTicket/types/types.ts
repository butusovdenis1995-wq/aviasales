export enum TypeFilter {
  Cheap = "cheap",
  Fast = "fast",
  Optimal = "optimal",
}

export type FilterTicket = Record<TypeFilter, boolean>;

export interface ButtonSorted {
  position: string;
  type: TypeFilter;
  label: string;
}

export enum TransferKey {
  All = "all",
  Nonstops = "nonstops",
  One = "one",
  Two = "two",
  Three = "three",
}

export type TransfersState = Record<TransferKey, boolean>;

export interface FilterState {
  pagination: number;
  transfer: TransfersState;
  sorted: FilterTicket;
}
