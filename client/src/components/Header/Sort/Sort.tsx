import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../hooks';
import { getCities, setSortBy } from '../../../store/reducers/citiesSlice';
import { IFilterName } from '../../../types/cities';
import { RadioInput } from '../../shared';
import s from './Sort.module.scss';

export const Sort: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector(s => s.cities);

  const setSortHelper = (name: IFilterName) => {
    return () => {
      dispatch(setSortBy(name));
      dispatch(getCities());
    };
  };

  return (
    <div className={s.sort}>
      <h3 className={s.title}>Sort by:</h3>
      <div className={s.field}>
        <label className={s.label} htmlFor='sort-id'>
          Id
        </label>
        <RadioInput
          name='sort'
          id='sort-id'
          checked={sortBy === 'id'}
          onChange={setSortHelper('id')}
        />
      </div>
      <div className={s.field}>
        <label className={s.label} htmlFor='sort-name'>
          Name
        </label>
        <RadioInput
          name='sort'
          id='sort-name'
          checked={sortBy === 'name'}
          onChange={setSortHelper('name')}
        />
      </div>
      <div className={s.field}>
        <label className={s.label} htmlFor='sort-count'>
          Count
        </label>
        <RadioInput
          name='sort'
          id='sort-count'
          checked={sortBy === 'count'}
          onChange={setSortHelper('count')}
        />
      </div>
      <div className={s.field}>
        <label className={s.label} htmlFor='sort-distance'>
          Distance
        </label>
        <RadioInput
          name='sort'
          id='sort-distance'
          checked={sortBy === 'distance'}
          onChange={setSortHelper('distance')}
        />
      </div>
    </div>
  );
};
