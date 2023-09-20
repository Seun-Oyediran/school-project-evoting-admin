'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/svg';
import { dashboardRoutes } from '@/utils/static';
import { matchRoute } from '@/utils';

const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <div className="voting__app__dashboard__sidebar">
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <div className="logo__con">
            <div className="d-flex gap-3 align-items-center">
              <div>
                <Logo />
              </div>
              <div>
                <h4>
                  E-Voting
                  <br />
                  Portal
                </h4>
              </div>
            </div>
          </div>

          <div className="links__con my-5 pt-4">
            {dashboardRoutes.map((item) => (
              <div key={item.id} className="my-2">
                <Link
                  className={`dashboard__link  ${
                    matchRoute(pathname, item.route, item.id === 1) ? 'active' : ''
                  }`}
                  href={item.route}
                >
                  <div className="d-flex gap-3 align-items-center">
                    {item.icon()}
                    <p>{item.label}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="rights__reserved">
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
