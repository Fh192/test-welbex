import React from 'react';
import { ICity } from '../../../types/cities';
import { Column } from './Column';

interface Props extends ICity {
  compact: boolean;
}

export const Row: React.FC<Props> = ({
  id,
  date,
  name,
  count,
  distance,
  compact,
}) => {
  if (compact) {
    return (
      <>
        <span>
          <Column title='id' />
          {id}
        </span>
        <span>
          <Column title='date' />
          {new Date(date).toLocaleDateString()}
        </span>
        <span>
          <Column title='name' />
          {name}
        </span>
        <span>
          <Column title='count' />
          {count}
        </span>
        <span>
          <Column title='distance' /> {distance}
        </span>
      </>
    );
  } else {
    return (
      <>
        <span>{id}</span>
        <span>{new Date(date).toLocaleDateString()}</span>
        <span>{name}</span>
        <span>{count}</span>
        <span>{distance}</span>
      </>
    );
  }
};
