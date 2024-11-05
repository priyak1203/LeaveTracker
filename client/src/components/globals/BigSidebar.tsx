import { TiThMenu } from 'react-icons/ti';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { RenderNavLinks } from './NavLinks';

import LogoutBtn from './LogoutBtn';
import ToggleTheme from './ToggleTheme';

function BigSidebar() {
  // temp
  const user = {
    role: 'ADMIN',
  };

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
          <div className="flex mt-3 mb-3 justify-center ">
            <span className="w-10 h-10 p-2 flex items-center justify-center bg-purple-700 text-white rounded-full">
              LT
            </span>
          </div>
          <nav className="flex flex-col items-center px-3 py-4 overflow-y-auto">
            <RenderNavLinks userRole={user.role} renderStyle={renderStyle} />
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
