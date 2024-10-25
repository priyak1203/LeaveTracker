import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <>
      <div className="min-h-screen bg-slate-100 dark:bg-black">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
