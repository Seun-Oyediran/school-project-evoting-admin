'use client';
import queries from '@/services/queries/voters';
import { IAgeGroup } from '@/services/queries/voters/types';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const generateAgeGroupData = (data: IAgeGroup | null) => {
  return [
    {
      name: 'Youth (18-34)',
      Male: data?.ageData?.['18-34'].male,
      Female: data?.ageData?.['18-34'].female,
    },
    {
      name: 'Middle-Aged (35-49)',
      Male: data?.ageData?.['35-49'].male,
      Female: data?.ageData?.['35-49'].female,
    },
    {
      name: 'Elderly (50-69)',
      Male: data?.ageData?.['50-69'].male,
      Female: data?.ageData?.['50-69'].female,
    },
    {
      name: 'Old (70+)',
      Male: data?.ageData?.['70+'].male,
      Female: data?.ageData?.['70+'].female,
    },
  ];
};

const Barchart = () => {
  const { data: ageGroupData } = queries.readOne();
  const data = generateAgeGroupData(ageGroupData);

  return (
    <div className="bg-white py-4 px-2 voting__app__pie__chart ">
      <div className="mb-5 p-2">
        <h3>Age group</h3>
      </div>
      <ResponsiveContainer width={685} height={400}>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="Male" fill="#0F5FC2" radius={[8, 8, 8, 8]} />
          <Bar dataKey="Female" fill="#DA001A" radius={[8, 8, 8, 8]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchart;
