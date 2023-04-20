export interface CompanyReq {
  query: string;
  count: number;
  kpp?: string;
}

export interface CompanyMainWithBranches {
  company: Company;
  branches: Company[];
}

export interface CompanyResponseApi {
  suggestions: CompanyResponseSuggestion[];
}

export interface CompanyResponseSuggestion {
  value: string;
  unrestricted_value: string;
  data: Company;
}

export interface Company {
  inn: string;
  kpp?: string;
  name?: CompanyName;
  //   TODO: type it
  address?: CompanyAddress;
  state?: CompanyState;
  fio?: CompanyIndividualShareholder;
  invalid?: boolean;
  founders?: Object[];
  branch_type?: BranchType;
  //   type: CompanyType;
}

export enum BranchType {
  // головная организация
  MAIN = "MAIN",
  // филиал
  BRANCH = "BRANCH",
}

export enum CompanyType {
  // юридическое лицо
  LEGAL = "LEGAL",
  //   индивидуальный предприниматель
  INDIVIDUAL = "INDIVIDUAL",
}

export interface CompanyName {
  full_with_opf: string;
  short_with_opf: string;
  full: string;
  short: string;
}

export interface CompanyState {
  actuality_date: string;
  registration_date: string;
  liquidation_date: string;
  status: CompanyStatus;
}
export enum CompanyStatus {
  // действующая
  ACTIVE = "ACTIVE",
  // ликвидируется
  LIQUIDATING = "LIQUIDATING",
  // ликвидирована
  LIQUIDATED = "LIQUIDATED",
  // банкротство
  BANKRUPT = "BANKRUPT",
  // в процессе присоединения к другому юрлицу, с последующей ликвидацией
  REORGANIZING = "REORGANIZING",
}

export interface CompanyIndividualShareholder {
  surname: string;
  name: string;
  patronymic: string;
}

export interface CompanyAddress {
  value: string;
  data: {
    source: string;
  };
}
