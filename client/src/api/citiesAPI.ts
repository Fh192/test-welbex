import {
  IGetCities,
  IGetCitiesParams,
  IGetCitiesResponse,
} from '../types/cities';
import { instance } from './instance';

export const citiesAPI = {
  getCities: async (params: IGetCitiesParams): Promise<IGetCities> => {
    const { search, page, sortBy, filter } = params;
    const queryParams: string[] = [
      `search=${search}`,
      `page=${page}`,
      `sortBy=${sortBy}`,
      `filterName=${filter.name}`,
      `filterCondition=${filter.condition}`,
      `filterValue=${filter.value}`,
    ];
    const response = await instance.get<IGetCitiesResponse>(
      `/cities?${queryParams.join('&')}`
    );

    return { ...response.data, rowsCount: parseInt(response.data.rowsCount) };
  },
};
