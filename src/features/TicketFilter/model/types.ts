export type TypeFilter = "cheap" | "fast" | "optimal";
export type FilterTicket = Record<TypeFilter, boolean>;
export interface ButtonSorted {
  position: string;
  type: TypeFilter;
  label: string;
}
