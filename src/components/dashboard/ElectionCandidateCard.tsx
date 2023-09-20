import React from 'react';
import { Button } from '../form-control';
import { calculateAge, generateAvatar } from '@/utils';
import { Candidate } from '@/services/queries/candidate/types';

interface IProps {
  handleClick?: () => void;
  item: Candidate;
}

const ElectionCandidateCard = (props: IProps) => {
  const { item } = props;
  return (
    <div className="voting__app__election__candidate__card__con h-100">
      <div className="d-flex gap-3">
        <div className="w-100 ">
          <div className="d-flex flex-column justify-content-between gap-3 h-100">
            <div>
              <div className="candidate__picture">
                <img src={generateAvatar(`${item.lastName} ${item.firstName}`)} alt="candidate" />
              </div>

              {/* <div className="candidate__details mt-2">
                <h6>Candidate Name</h6>
                <p className="mt-1">Obayemi Abimbola</p>
              </div> */}
            </div>

            <div className="candidate__details mt-2">
              <h6>Age</h6>
              <p className="mt-1">{calculateAge(new Date(item.dob))}</p>
            </div>
          </div>
        </div>
        <div className="w-100 ">
          <div className="d-flex flex-column justify-content-between gap-3 h-100">
            <div className="candidate__details mt-2">
              <h6>Candidate Name</h6>
              <p className="mt-1">{`${item.lastName} ${item.firstName}`}</p>
            </div>

            <div className="candidate__details mt-2">
              <h6>Gender</h6>
              <p className="mt-1">{item.gender}</p>
            </div>

            <div className="candidate__details mt-2">
              <h6>State of Origin</h6>
              <p className="mt-1 text-capitalize">{item.state}</p>
            </div>

            {/* <div className="mt-2">
              <Button color="green" type="button" onClick={handleClick}>
                VOTE
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectionCandidateCard;
