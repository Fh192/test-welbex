import React from 'react';
import { useDispatch } from 'react-redux';
import {
  getCities,
  setFilter as setFilterRedux,
} from '../../../../store/reducers/citiesSlice';
import { IFilter } from '../../../../types/cities';
import s from './ResetFilter.module.scss';

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const ResetFilter: React.FC<Props> = ({ setFilter }) => {
  const dispatch = useDispatch();

  const resetFilter = () => {
    const filter: IFilter = {
      name: 'id',
      condition: 'greater',
      value: 0,
    };

    setFilter(filter);
    dispatch(setFilterRedux(filter));
    dispatch(getCities());
  };

  return (
    <button className={s.reset} onClick={() => resetFilter()}>
      reset
    </button>
  );
};
