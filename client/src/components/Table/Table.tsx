import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';
import { getCities } from '../../store/reducers/citiesSlice';
import { Preloader } from '../shared';
import { Grid } from './Grid/Grid';
import s from './Table.module.scss';

export const Table: React.FC = () => {
  const dispatch = useDispatch();
  const { notFound, fetching } = useSelector(s => s.cities);

  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <div className={s.table}>
      {fetching ? (
        <div className={s.preloader}>
          <Preloader />
        </div>
      ) : (
        <>
          <Grid />
          {notFound && <div className={s.notFound}>Not found</div>}
        </>
      )}
    </div>
  );
};
