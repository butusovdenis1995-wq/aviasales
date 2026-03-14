export enum TransplantForm {
  Nominative = "ПЕРЕСАДКА",
  Genitive = "ПЕРЕСАДКИ",
  GenitivePlural = "ПЕРЕСАДОК",
}

export const TRANSPLANT_FORMS = [
  TransplantForm.Nominative,
  TransplantForm.Genitive,
  TransplantForm.GenitivePlural,
] as [string, string, string];
