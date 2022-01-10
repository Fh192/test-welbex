export interface ICity {
  id: number;
  date: string;
  name: string;
  count: number;
  distance: number;
}

export interface ICitiesSlice {
  page: number;
  pageCount: number;
  rowsPerPage: number;
  cities: ICity[];
  search: string;
  filter: IFilter;
  sortBy: IFilterName;
  notFound: boolean;
  fetching: boolean;
}

export type IGetCities = Omit<IGetCitiesResponse, 'rowsCount'> & {
  rowsCount: number;
};

export interface IGetCitiesParams {
  search: string;
  page: number;
  sortBy: IFilterName;
  filter: IFilter;
}

export interface IGetCitiesResponse {
  rowsCount: string;
  cities: ICity[];
}

export interface IFilter {
  name: IFilterName;
  condition: IFilterCondition;
  value: number;
}

export type IFilterCondition = 'lower' | 'equal' | 'greater';
export type IFilterName = 'id' | 'name' | 'count' | 'distance';
