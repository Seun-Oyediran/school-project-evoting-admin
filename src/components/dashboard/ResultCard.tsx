import routes from '@/routes';
import { generateAvatar } from '@/utils';
import { resultColors } from '@/utils/static';
import Link from 'next/link';
import React from 'react';

interface IResultCardItem {
  name: string;
  background: string;
}

const ResultCardItem = (props: IResultCardItem) => {
  const { name, background } = props;
  return (
    <div className="d-flex align-items-center voting__app__result__card__item gap-3 my-4">
      <div className="d-flex align-items-center gap-2 candidate">
        <div className="icon">
          <img src={generateAvatar(name)} alt={name} />
        </div>
        <div className="name w-100">
          <p>{name}</p>
        </div>
      </div>
      <div className="result w-100">
        <div className="progress__bar" style={{ background }}></div>
        <p className="votes">1,101,230 Votes</p>
      </div>
    </div>
  );
};

const ResultCard = () => {
  return (
    <div className="voting__app__result__card bg-white h-100">
      <div className="d-flex title__con justify-content-between gap-3">
        <p>Lagos</p>
        <Link href={`${routes.dashboard.results.path}/4/stats`}>Stats</Link>
      </div>

      <div>
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ResultCardItem key={i} name="Oladeji Raji" background={resultColors[i]} />
          ))}
      </div>

      <div className="d-flex justify-content-end voting__app__view__all">
        <Link href={`${routes.dashboard.results.path}/4`}>View all</Link>
      </div>
    </div>
  );
};

export default ResultCard;
