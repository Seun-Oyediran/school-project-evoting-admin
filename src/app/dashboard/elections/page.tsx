'use client';
import React, { Fragment, useState } from 'react';
import { CreateElection, ElectionCard } from '@/components/dashboard';
import { Button, ModalContainer, RenderIf, SearchBar, SkeletonLoader } from '@/components';
import { Create } from '@/svg';
import queries from '@/services/queries/election';

const Page = () => {
  const { data, isLoading } = queries.read();
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="">
        <div className="recent__elections__title mt">
          <h3>Recent Elections</h3>
          <div className="d-flex justify-content-between align-items-center my-4">
            <div className="create__button__con d-flex mt-1">
              <div className="d-flex">
                <Button
                  className="d-flex align-items-center justify-content-center gap-3"
                  color="green"
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  New Election <Create />
                </Button>
              </div>
            </div>
            {/* <h3>Recent Elections</h3> */}

            <div>
              <SearchBar placeholder="Search Candidates" />
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

          {data?.elections.map((item) => (
            <ElectionCard key={item.id} item={item} />
          ))}
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

export default Page;
