import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomeLayout, LoginPage } from './pages';
import {
  Balances,
  Dashboard,
  DashboardLayout,
  Leaves,
  Settings,
  Users,
} from './pages/DashboardPages';
import { History, Portal, PortalLayout } from './pages/PortalPages';

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
          { path: 'users', element: <Users /> },
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
