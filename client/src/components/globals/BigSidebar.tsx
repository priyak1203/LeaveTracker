import { TiThMenu } from 'react-icons/ti';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { RenderNavLinks } from './NavLinks';

import LogoutBtn from './LogoutBtn';
import ToggleTheme from './ToggleTheme';
import { Link } from 'react-router-dom';
import { AppContextType, useAppContext } from '@/context/appContext';

function BigSidebar() {
  const { user } = useAppContext() as AppContextType;
  const renderStyle = 'LINKS';

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 bg-purple-100 rounded-full text-purple-500">
          <TiThMenu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-56 flex flex-col justify-between">
        <div>
          <SheetTitle>
            <Link to="/" className="flex mt-3 mb-3 justify-center ">
              <span className="w-10 h-10 p-2 flex items-center justify-center bg-purple-700 text-white rounded-full">
                LT
              </span>
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <nav className="flex flex-col items-center px-3 py-4 overflow-y-auto">
            <RenderNavLinks userRole={user?.role} renderStyle={renderStyle} />
          </nav>
        </div>
        <div className="flex justify-around items-center">
          <ToggleTheme />
          <LogoutBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BigSidebar;
