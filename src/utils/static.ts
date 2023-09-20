import routes from '@/routes';
import { Dashboard, DashboardElection, DashboardRegister, DashboardResult } from '@/svg';

export const dashboardRoutes = [
  {
    id: 1,
    label: 'Dashboard',
    icon: Dashboard,
    route: routes.dashboard.path,
  },
  {
    id: 2,
    label: 'Elections',
    icon: DashboardElection,
    route: routes.dashboard.elections.path,
  },
  {
    id: 3,
    label: 'Voters Analytics',
    icon: DashboardResult,
    route: routes.dashboard.stats.path,
  },
];

export const resultColors = ['#00AC4F', '#0F5FC2', '#DA001A', '#FFC107'];
