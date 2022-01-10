import React from 'react';
import { IFilter } from '../../../../types/cities';
import s from './FilterValueInput.module.scss';

interface Props {
  value: number;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const FilterValueInput: React.FC<Props> = ({ value, setFilter }) => {
  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = +e.target.value;

    if (!Number.isNaN(value)) {
      setFilter(filter => ({ ...filter, value }));
    }
  };

  return (
    <div className={s.value}>
      <input
        type='text'
        inputMode='numeric'
        autoComplete='off'
        value={value}
        onChange={valueChangeHandler}
      />
    </div>
  );
};
