const routes = {
  auth: {
    register: {
      path: '/auth/register',
    },
  },
  dashboard: {
    path: '/dashboard',
    elections: {
      path: '/dashboard/elections',
      completed: {
        path: '/dashboard/elections/completed',
      },
      uncompleted: {
        path: '/dashboard/elections/uncompleted',
      },
    },
    results: {
      path: '/dashboard/results',
      stats: {
        path: '/dashboard/results/stats',
      },
    },

    stats: {
      path: '/dashboard/stats',
    },
  },
};

export default routes;
