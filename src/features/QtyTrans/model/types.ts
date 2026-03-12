export type TransferKey = "all" | "nonstops" | "one" | "two" | "three";

export type TransfersState = Record<TransferKey, boolean>;

export interface FilterState {
  transfer: TransfersState;
}
