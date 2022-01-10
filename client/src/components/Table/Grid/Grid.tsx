import React, { useEffect, useState } from 'react';
import { useSelector } from '../../../hooks';
import { Column } from './Column';
import s from './Grid.module.scss';
import { Row } from './Row';

export const Grid: React.FC = () => {
  const { cities } = useSelector(s => s.cities);
  const [compact, setCompact] = useState(window.innerWidth < 540);
  const columns: string[] = ['ID', 'DATE', 'NAME', 'COUNT', 'DISTANCE'];

  useEffect(() => {
    const listener = () => {
      if (window.innerWidth < 540) {
        setCompact(true);
      } else {
        setCompact(false);
      }
    };

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <div className={s.grid}>
      {!compact && columns.map(title => <Column title={title} key={title} />)}

      {cities.map(city => (
        <Row {...city} compact={compact} key={city.id} />
      ))}
    </div>
  );
};
