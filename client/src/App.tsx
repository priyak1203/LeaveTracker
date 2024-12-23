import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {
  AppLayout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Register,
} from './pages';
import {
  Balances,
  Dashboard,
  Leaves,
  Settings,
  Users,
} from './pages/dashboardPages';
import { History, Portal } from './pages/portalPages';
import { loader as userLoader } from './components/dashboard/UsersTable';
import { loader as leavesLoader } from './components/dashboard/LeavesTable';
import { loader as balancesLoader } from './components/dashboard/BalancesTable';
import { loader as settingsLoader } from './pages/dashboardPages/Settings';
import { loader as portalLoader } from './pages/portalPages/Portal';
import { loader as historyLoader } from './pages/portalPages/History';

import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: '/register', element: <Register /> },
      { path: '/login', element: <Login /> },
      {
        path: 'dashboard',
        element: (
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'balances', element: <Balances />, loader: balancesLoader },
          { path: 'leaves', element: <Leaves />, loader: leavesLoader },
          { path: 'settings', element: <Settings />, loader: settingsLoader },
          { path: 'users', element: <Users />, loader: userLoader },
        ],
      },
      {
        path: 'portal',
        element: (
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Portal />, loader: portalLoader },
          { path: 'history', element: <History />, loader: historyLoader },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            textTransform: 'capitalize',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
