'use client';
import queries from '@/services/queries/voters';
import { GenderData } from '@/services/queries/voters/types';
import React from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell, Tooltip, Legend } from 'recharts';

const generateGenderData = (data: GenderData | undefined) => {
  return [
    { name: 'Male', value: data?.male, radius: 3 },
    { name: 'Female', value: data?.female, radius: 90 },
  ];
};

const PieChartComponent = () => {
  const { data: genderData } = queries.read();
  const data = generateGenderData(genderData?.genderData);

  const COLORS = ['#0F5FC2', '#DA001A', '#FFBB28', '#FF8042'];
  const COLORS2 = ['transparent', '#DA001A', '#FFBB28', '#FF8042'];

  return (
    <div className="voting__app__pie__chart bg-white p-4">
      <div className="mb-3">
        <h3>Gender</h3>
        <div className="d-flex">
          <div className="legend d-flex align-items-center gap-2">
            <p>Male</p>
            <div style={{ background: COLORS[0] }} className="color"></div>
          </div>
          <div className="legend d-flex align-items-center gap-2">
            <p>Female</p>
            <div style={{ background: COLORS[1] }} className="color"></div>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            innerRadius={40}
            outerRadius={80}
            fill="#8884d8"
            // paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                radius={entry.radius}
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                width={3000}
              />
            ))}
          </Pie>
          {/* <Legend /> */}
          <Tooltip />
          <Pie
            data={data}
            innerRadius={35}
            outerRadius={85}
            fill="#8884d8"
            // paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                radius={entry.radius}
                key={`cell-${index}`}
                fill={COLORS2[index % COLORS.length]}
                width={3000}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
