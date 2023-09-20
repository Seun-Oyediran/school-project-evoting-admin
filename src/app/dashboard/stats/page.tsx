'use client';
import React from 'react';
import { Barchart, PieChart, VoterStats } from '@/components/dashboard';
import queries from '@/services/queries/voters';

const Page = () => {
  const { data } = queries.read();
  const { data: ageGroupData } = queries.readOne();

  console.log(data);
  console.log(ageGroupData);

  return (
    <div>
      <div className="recent__elections__title mb-4">
        <h3>All Registered Voters Analytics</h3>
      </div>
      <div className="d-flex my-3">
        <VoterStats />
      </div>
      <div className="d-flex gap-5 ">
        <div>
          <Barchart />
        </div>
        <div>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Page;
