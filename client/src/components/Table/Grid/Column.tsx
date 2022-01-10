import React from 'react';
import s from './Grid.module.scss';

export const Column: React.FC<{ title: string }> = ({ title }) => {
  return (
    <span className={s.column}>
      <h3>{title}</h3>
    </span>
  );
};
