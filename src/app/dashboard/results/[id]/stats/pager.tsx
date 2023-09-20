'use client';
import React from 'react';
import { Barchart, PieChart } from '@/components/dashboard';

const Page = () => {
  return (
    <div>
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
