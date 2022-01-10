import React from 'react';
import s from './App.module.scss';
import { Main } from './Main/Main';

export const App: React.FC = () => {
  return (
    <div className={s.App}>
      <div className={s.container}>
        <Main />
      </div>
    </div>
  );
};
