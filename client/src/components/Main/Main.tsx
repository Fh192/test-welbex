import React, { useRef } from 'react';
import { Header } from '../Header/Header';
import { Pagination } from '../Pagination/Pagination';
import { Table } from '../Table/Table';
import s from './Main.module.css';

export const Main: React.FC = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  return (
    <main className={s.main}>
      <Header />
      <div className={s.anchor} ref={anchorRef} />
      <Table />
      <Pagination anchorRef={anchorRef} />
    </main>
  );
};
