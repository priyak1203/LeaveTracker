import { RenderNavLinks } from './NavLinks';
import LogoutBtn from './LogoutBtn';
import ToggleTheme from './ToggleTheme';
import { AppContextType, useAppContext } from '@/context/appContext';
import Logo from './Logo';

function Sidebar() {
  const { user } = useAppContext() as AppContextType;
  const renderStyle = 'ICON';

  return (
    <div className="hidden sm:block fixed inset-y-0 left-0 w-[5rem] bg-white rounded-lg overflow-hidden dark:bg-black dark:border-r">
      <div className="flex flex-col justify-between items-center h-full">
        {/* TOP PART */}
        <div>
          <div className="mt-8 flex justify-center items-center">
            <Logo />
          </div>
          <nav className="flex flex-col px-3 py-4 overflow-y-auto">
            <RenderNavLinks userRole={user?.role} renderStyle={renderStyle} />
          </nav>
        </div>

        {/* BOTTOM PART */}
        <div className="flex flex-col items-center space-y-6 my-8">
          <ToggleTheme />
          <LogoutBtn />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
