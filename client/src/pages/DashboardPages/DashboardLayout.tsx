import { Outlet } from 'react-router-dom';
import Header from '@/components/globals/Header';

function DashboardLayout() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 dark:bg-black">
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
