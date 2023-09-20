'use client';
import { SearchBar } from '@/components';
import { ResultCard } from '@/components/dashboard';
import React from 'react';

const Page = () => {
  return (
    <div>
      <div className="d-flex justify-content-end mb-4">
        <div>
          <SearchBar placeholder="Search" />
        </div>
      </div>
      <div className="election__card__grid__con">
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </div>
    </div>
  );
};

export default Page;
