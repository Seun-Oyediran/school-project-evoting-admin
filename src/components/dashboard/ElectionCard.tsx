import React from 'react';
import { Button } from '../form-control';
import routes from '@/routes';
import { Election } from '@/services/queries/election/types';
import { CheckElectionStatus, getElectionStatus } from '@/utils';

interface IElectionCardTitle {
  title: string;
}

interface IElectionCardValue {
  value: string;
}

interface IProps {
  item: Election;
}

const ElectionCardTitle = (props: IElectionCardTitle) => {
  const { title } = props;
  return <p className="voting__app__election__card__title">{title}</p>;
};

const ElectionCardValue = (props: IElectionCardValue) => {
  const { value } = props;
  return <p className="voting__app__election__card__value">{value}</p>;
};

const ElectionCard = (props: IProps) => {
  const { item } = props;

  return (
    <div className="voting__app__election__card__con h-100">
      <div className="d-flex align-items-end">
        <div className="left">
          <div className="mt-3">
            <ElectionCardTitle title="Name" />
            <ElectionCardValue value={item.name} />
          </div>
          <div className="mt-3">
            <ElectionCardTitle title="Start Date" />
            <ElectionCardValue value={new Date(item.startDate).toLocaleDateString()} />
          </div>
          <div className="mt-3">
            <ElectionCardTitle title="End Date" />
            <ElectionCardValue value={new Date(item.endDate).toLocaleDateString()} />
          </div>
          {/* <div className="mt-3">
            <ElectionCardTitle title="Status" />
            <ElectionCardValue value={getElectionStatus(item.startDate, item.endDate)} />
          </div> */}
        </div>

        <div className="right">
          <div className="mt-3">
            <ElectionCardTitle title="No of Ballots" />
            <ElectionCardValue value={item.candidates.length.toString()} />
          </div>
          <div className="mt-3">
            <ElectionCardTitle title="Status" />
            <ElectionCardValue value={getElectionStatus(item.startDate, item.endDate)} />
          </div>
          <div className="mt-3">
            <Button
              color="green"
              href={`${routes.dashboard.elections.path}/${item.id}`}
              type="button"
            >
              View
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionCard;
