import queries from '@/services/queries/voters';
import React from 'react';
import { RenderIf, Spinner } from '../shared';

const VoterStats = () => {
  const { data, isLoading } = queries.read();

  return (
    <div className="voting__app__admin__election__stats voters bg-white p-4">
      <div className="d-flex flex-column gap-3 justify-content-between h-100">
        <div className="title">
          <h4>Voters Analytics</h4>
        </div>

        <RenderIf condition={isLoading}>
          <div className="py-2 mx-5 px-5">
            <Spinner />
          </div>
        </RenderIf>

        <RenderIf condition={!isLoading}>
          <div className="d-flex justify-content-between stats gap-4">
            <div>
              <h1 className="active">
                {Number(data?.genderData?.female) + Number(data?.genderData?.male)}
              </h1>
              <p>Total Voters</p>
            </div>

            <div>
              <h1 className="completed">{data?.genderData?.male}</h1>
              <p>Male Voters</p>
            </div>

            <div>
              <h1 className="uncompleted">{data?.genderData?.female}</h1>
              <p>Female Voters</p>
            </div>
          </div>
        </RenderIf>
      </div>
    </div>
  );
};

export default VoterStats;
