'use client';
import React from 'react';
import { Announcement, DashboardCreate, ElectionCard, VoterStats } from '@/components/dashboard';
import Link from 'next/link';
import routes from '@/routes';
import queries from '@/services/queries/election';
import { RenderIf, SkeletonLoader } from '@/components';

const Page = () => {
  const { data, isLoading } = queries.read();

  return (
    <div>
      <div className="dashboard__grid__con">
        <DashboardCreate />
        {/* <ElectionStats /> */}
        <Announcement />
      </div>

      <div className="mt-5">
        <div className="recent__elections__title mb-4 mt-3">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Recent Elections</h3>

            <Link href={routes.dashboard.elections.path}>View all</Link>
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

          {data?.elections.slice(0, 3).map((item) => (
            <ElectionCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div className="d-flex mt-5 pb-5">
        <VoterStats />
      </div>
    </div>
  );
};

export default Page;
