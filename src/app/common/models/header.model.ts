export interface Option {
  label: string;
  value: 'date' | 'count';
}

export interface QueryValue {
  filterValue: string;
  selectedOption: Option['value'];
  sortOrder: 'asc' | 'desc';
}
