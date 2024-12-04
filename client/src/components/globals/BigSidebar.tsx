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
import { AppContextType, useAppContext } from '@/context/appContext';
import Logo from './Logo';
import { RenderStyle } from '@/utils/types';

function BigSidebar() {
  const { user } = useAppContext() as AppContextType;
  const renderStyle = RenderStyle.LINKS;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-full bg-secondary text-primary dark:bg-primary dark:text-secondary-foreground">
          <TiThMenu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-56 flex flex-col justify-between">
        <div>
          <SheetTitle>
            <div className="flex mt-3 mb-3 justify-center">
              <Logo />
            </div>
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
