import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, LoginPage } from './pages';
import {
  Balances,
  Dashboard,
  DashboardLayout,
  Leaves,
  Settings,
  Users,
} from './pages/dashboardPages';
import { History, Portal, PortalLayout } from './pages/portalPages';

import { loader as userLoader } from './components/dashboard/UsersTable';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <LoginPage /> },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'balances', element: <Balances /> },
          { path: 'leaves', element: <Leaves /> },
          { path: 'settings', element: <Settings /> },
          { path: 'users', element: <Users />, loader: userLoader },
        ],
      },
      {
        path: '/portal',
        element: <PortalLayout />,
        children: [
          { index: true, element: <Portal /> },
          { path: 'history', element: <History /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
