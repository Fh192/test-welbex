import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../';
import { citiesAPI } from '../../api/citiesAPI';
import { ICitiesSlice, ICity, IFilter, IFilterName } from '../../types/cities';

const initialState: ICitiesSlice = {
  page: 1,
  pageCount: 1,
  rowsPerPage: 10,
  cities: [],
  search: '',
  sortBy: 'id',
  notFound: false,
  fetching: false,
  filter: {
    name: 'id',
    condition: 'greater',
    value: 0,
  },
};

export const getCities = createAsyncThunk<ICity[], void, { state: RootState }>(
  'cities/getCities',
  async (_, { getState, dispatch }) => {
    const { rowsPerPage, search, page, sortBy, filter } = getState().cities;
    const { cities, rowsCount } = await citiesAPI.getCities({
      search,
      page,
      sortBy,
      filter,
    });
    const pageCount = Math.ceil(rowsCount / rowsPerPage);

    dispatch(setNotFound(rowsCount === 0));
    dispatch(setPageCount(pageCount));

    return cities;
  }
);

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },

    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },

    setSortBy: (state, action: PayloadAction<IFilterName>) => {
      state.sortBy = action.payload;
    },
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload;
    },
    setNotFound: (state, action: PayloadAction<boolean>) => {
      state.notFound = action.payload;
    },
  },
  extraReducers: b => {
    b.addCase(getCities.fulfilled, (state, action) => {
      state.cities = action.payload;
      state.fetching = false;
    });

    b.addCase(getCities.pending, state => {
      state.fetching = true;
    });
  },
});

export const {
  setPage,
  setPageCount,
  setSearch,
  setSortBy,
  setFilter,
  setNotFound,
} = citiesSlice.actions;
