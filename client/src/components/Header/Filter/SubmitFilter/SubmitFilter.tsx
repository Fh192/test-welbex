import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../../hooks';
import {
  getCities,
  setFilter,
  setPage,
} from '../../../../store/reducers/citiesSlice';
import { IFilter } from '../../../../types/cities';
import s from './SubmitFilter.module.scss';

interface Props {
  filter: IFilter;
  close: () => void;
}

export const SubmitFilter: React.FC<Props> = ({ filter, close }) => {
  const dispatch = useDispatch();

  const hasChanges = useSelector(
    s => JSON.stringify(s.cities.filter) !== JSON.stringify(filter)
  );

  const submitHandler = () => {
    dispatch(setFilter(filter));
    dispatch(setPage(1));
    dispatch(getCities());
    close();
  };

  return (
    <button
      className={s.submitFilter}
      disabled={!hasChanges}
      onClick={submitHandler}
    >
      Filter
    </button>
  );
};
