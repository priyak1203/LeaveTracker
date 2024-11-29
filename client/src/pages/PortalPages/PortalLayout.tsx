import Header from '@/components/globals/Header';
import Sidebar from '@/components/globals/Sidebar';
import { Outlet } from 'react-router-dom';

function PortalLayout() {
  return (
    <>
      <div className="min-h-screen">
        <Sidebar />
        <div className="sm:ml-[6rem]">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default PortalLayout;
