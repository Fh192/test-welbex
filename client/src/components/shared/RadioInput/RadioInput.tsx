import React from 'react';
import s from './RadioInput.module.scss';

interface Props {
  checked?: boolean;
  name?: string;
  id?: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInput: React.FC<Props> = ({
  checked,
  name,
  id,
  onChange,
}) => {
  return (
    <label className={s.container}>
      <input
        type='radio'
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <div className={s.input}></div>
    </label>
  );
};
