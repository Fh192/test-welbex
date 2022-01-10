import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import arrowLeft from '../../assets/arrowLeft.svg';
import arrowRight from '../../assets/arrowRight.svg';
import { useSelector } from '../../hooks';
import { getCities, setPage } from '../../store/reducers/citiesSlice';
import s from './Pagination.module.scss';

interface Props {
  anchorRef: React.RefObject<HTMLDivElement>;
}

export const Pagination: React.FC<Props> = ({ anchorRef }) => {
  const dispatch = useDispatch();
  const { page, pageCount } = useSelector(s => s.cities);

  const pageChangeHandler = (direction: 'previous' | 'next') => {
    return () => {
      if (direction === 'previous') {
        dispatch(setPage(page - 1));
      } else if (direction === 'next') {
        dispatch(setPage(page + 1));
      }
    };
  };

  useEffect(() => {
    dispatch(getCities());
    anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dispatch, anchorRef, page]);

  return (
    <div className={s.pagination}>
      <div className={s.pages}>
        <span>{`${page} of ${pageCount}`}</span>
      </div>
      <div className={s.changePage}>
        <button onClick={pageChangeHandler('previous')} disabled={page <= 1}>
          <img src={arrowLeft} alt='previous' />
        </button>
        <button
          onClick={pageChangeHandler('next')}
          disabled={page >= pageCount}
        >
          <img src={arrowRight} alt='next' />
        </button>
      </div>
    </div>
  );
};
