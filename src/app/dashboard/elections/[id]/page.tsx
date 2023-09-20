'use client';
import React, { Fragment, useState } from 'react';
import { Button, RenderIf, SearchBar, SkeletonLoader } from '@/components';
import { CreateCandidate, ElectionCandidateCard } from '@/components/dashboard';
import dynamic from 'next/dynamic';
import { Create } from '@/svg';
import queries from '@/services/queries/candidate';
import electionQueries from '@/services/queries/election';
import { useParams } from 'next/navigation';
const ModalContainer = dynamic(() => import('../../../../components/shared/ModalContainer'), {
  ssr: false,
});

const Election = () => {
  const params = useParams();
  const { data, isLoading } = queries.read({ id: params.id });
  const { data: electionData } = electionQueries.readOne({ id: params.id });
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="recent__elections__title ">
        <h3>{electionData?.elections.name}</h3>
        <p className="mt-2">{electionData?.elections.description}</p>
        <div className="d-flex justify-content-between my-4 align-items-center">
          <div className="voting__app__elections__page__title">
            <div className="create__button__con d-flex mt-1">
              <div className="d-flex">
                <Button
                  className="d-flex align-items-center justify-content-center gap-3"
                  color="blue"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Create New Candidate <Create />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="election__card__grid__con">
          <RenderIf condition={isLoading}>
            {[1, 2, 3].map((i) => (
              <div key={i} className="" style={{ height: '250px', width: '100%' }}>
                <SkeletonLoader />
              </div>
            ))}
          </RenderIf>

          {data?.candidates.map((item) => (
            <ElectionCandidateCard key={item.id} item={item} />
          ))}
        </div>
        <RenderIf condition={!isLoading && data?.candidates.length === 0}>
          <div className="d-flex justify-content-center mt-4">
            <div>
              <h6 className="text-center">No candidate added yet. Start by creating one</h6>
            </div>
          </div>
        </RenderIf>
        <ModalContainer
          handleClose={() => {
            setShowModal(false);
          }}
          show={showModal}
          centered
          className="election__modal__container form"
        >
          <CreateCandidate
            handleSuccess={() => {
              setShowModal(false);
            }}
          />
        </ModalContainer>
      </div>
    </Fragment>
  );
};

export default Election;
