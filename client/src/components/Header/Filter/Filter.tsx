import React, { useState } from 'react';
import { useSelector } from '../../../hooks';
import { IFilter } from '../../../types/cities';
import s from './Filter.module.scss';
import { FilterValueInput } from './FilterValueInput/FilterValueInput';
import { Radios } from './Radios/Radios';
import { ResetFilter } from './ResetFilter/ResetFilter';
import { SubmitFilter } from './SubmitFilter/SubmitFilter';

interface Props {
  close: () => void;
}

export const Filter: React.FC<Props> = ({ close }) => {
  const citiesState = useSelector(s => s.cities);
  const [filter, setFilter] = useState<IFilter>(citiesState.filter);

  return (
    <div className={s.filter}>
      <div className={s.header}>
        <h3 className={s.title}>Filter by:</h3>
        <ResetFilter setFilter={setFilter} />
      </div>
      <Radios filter={filter} setFilter={setFilter} />
      <FilterValueInput value={filter.value} setFilter={setFilter} />
      <SubmitFilter filter={filter} close={close} />
    </div>
  );
};
