import { DashboardHeader, DashboardSidebar } from '@/components';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="voting__app__dashboard__layout ">
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <DashboardHeader />
      </div>
      <div className="main__content scrollbar">{children}</div>
    </div>
  );
};

export default Layout;
