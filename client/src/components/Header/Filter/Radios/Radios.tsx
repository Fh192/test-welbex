import React from 'react';
import { IFilter } from '../../../../types/cities';
import { FilterRadio } from '../FilterRadio/FilterRadio';
import s from './Radios.module.scss';

interface Props {
  filter: IFilter;
  setFilter: React.Dispatch<React.SetStateAction<IFilter>>;
}

export const Radios: React.FC<Props> = ({ filter, setFilter }) => {
  const setFilterHelper = (a: Partial<IFilter>) => {
    return () => {
      setFilter(filter => ({ ...filter, ...a }));
    };
  };

  return (
    <div className={s.radios}>
      <div className={s.inner}>
        <FilterRadio
          label='Id'
          name='filterName'
          id='filterName-id'
          checked={filter.name === 'id'}
          onChange={setFilterHelper({ name: 'id' })}
        />
        <FilterRadio
          label='Count'
          name='filterName'
          id='filterName-count'
          checked={filter.name === 'count'}
          onChange={setFilterHelper({ name: 'count' })}
        />
        <FilterRadio
          label='Distance'
          name='filterName'
          id='filterName-distance'
          checked={filter.name === 'distance'}
          onChange={setFilterHelper({ name: 'distance' })}
        />
      </div>
      <div className={s.inner}>
        <FilterRadio
          label='Lower'
          name='filterCondition'
          id='filterCondition-lower'
          checked={filter.condition === 'lower'}
          onChange={setFilterHelper({ condition: 'lower' })}
        />
        <FilterRadio
          label='Equal'
          name='filterCondition'
          id='filterCondition-equal'
          checked={filter.condition === 'equal'}
          onChange={setFilterHelper({ condition: 'equal' })}
        />
        <FilterRadio
          label='Greater'
          name='filterCondition'
          id='filterCondition-greater'
          checked={filter.condition === 'greater'}
          onChange={setFilterHelper({ condition: 'greater' })}
        />
      </div>
    </div>
  );
};
