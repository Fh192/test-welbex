import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import crossIcon from '../../assets/cross.svg';
import searchIcon from '../../assets/search.svg';
import {
  getCities,
  setPage,
  setSearch,
} from '../../store/reducers/citiesSlice';
import s from './Search.module.scss';

export const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const clearInput = () => {
    setSearchValue('');
    dispatch(setSearch(''));
    dispatch(getCities());
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (searchValue) {
        dispatch(setSearch(searchValue));
        dispatch(setPage(1));
        dispatch(getCities());
      }
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [dispatch, searchValue]);

  return (
    <div className={s.search}>
      <img className={s.icon} src={searchIcon} alt='' />

      <input
        type='text'
        name='search'
        placeholder='Search city...'
        autoComplete='off'
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />

      <button className={s.clear} onClick={clearInput} disabled={!searchValue}>
        <img src={crossIcon} alt='clear' />
      </button>
    </div>
  );
};
