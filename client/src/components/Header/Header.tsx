import React, { useRef, useState } from 'react';
import filterIcon from '../../assets/filter.svg';
import { useOnClickOutside } from '../../hooks';
import { Search } from '../Search/Search';
import { Filter } from './Filter/Filter';
import s from './Header.module.scss';
import { Sort } from './Sort/Sort';

export const Header: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => {
    setOpenDropdown(false);
  });

  return (
    <header className={s.header}>
      <button className={s.openDropdown} onClick={() => setOpenDropdown(!openDropdown)}>
        <img src={filterIcon} alt='' />
        Filter
      </button>
      <div className={`${s.dropdown} ${openDropdown ? s.open : ''}`} ref={ref}>
        <Sort />
        <Filter close={() => setOpenDropdown(false)} />
      </div>
      <Search />
    </header>
  );
};
