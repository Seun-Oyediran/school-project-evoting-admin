'use client';
import React, { Fragment, useState } from 'react';
import { Button } from '../form-control';
import CreateElection from './CreateElection';
import dynamic from 'next/dynamic';
const ModalContainer = dynamic(() => import('../shared/ModalContainer'), {
  ssr: false,
});

const DashboardCreate = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className="voting__app__announcement__card create">
        <div className="d-flex flex-column gap-3 justify-content-between h-100">
          <div className="title">
            <h3>Create Election</h3>
          </div>
          <div className="create__button__con mt-1">
            <Button
              className="d-flex align-items-center justify-content-center gap-3"
              color="green"
              onClick={() => {
                setShowModal(true);
              }}
            >
              New Election
            </Button>
          </div>
          <p className="info mt-3">
            Create new elections or ballots of new parties in created elections
          </p>
        </div>
      </div>

      <ModalContainer
        handleClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        centered
        className="election__modal__container form"
      >
        <CreateElection
          handleSuccess={() => {
            setShowModal(false);
          }}
        />
      </ModalContainer>
    </Fragment>
  );
};

export default DashboardCreate;
