import React from 'react';
import s from './FilterRadio.module.scss';

interface Props {
  label: string;
  name: string;
  id: string;
  checked: boolean;
  onChange: () => void;
}

export const FilterRadio: React.FC<Props> = ({
  label,
  id,
  name,
  checked,
  onChange,
}) => {
  return (
    <label className={s.filterRadio} htmlFor={id}>
      {label}
      <input
        type='radio'
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <div className={s.bg} />
    </label>
  );
};
