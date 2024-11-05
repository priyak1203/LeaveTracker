import { TiThMenu } from 'react-icons/ti';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { RenderLinks } from './NavLinks';
import { adminLinks, moderatorLinks, userLinks } from '@/utils/links';
import LogoutBtn from './LogoutBtn';

function BigSidebar() {
  // temp
  const user = {
    role: 'ADMIN',
  };

  const adminLinksRender = () => {
    return <>{RenderLinks({ links: adminLinks })}</>;
  };

  const moderatorLinksRender = () => {
    return <>{RenderLinks({ links: moderatorLinks })}</>;
  };

  const userLinksRender = () => {
    return <>{RenderLinks({ links: userLinks })}</>;
  };

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
            {user?.role === 'ADMIN' && adminLinksRender()}

            {user?.role === 'MODERATOR' && moderatorLinksRender()}
            {user?.role === 'USER' && userLinksRender()}
          </nav>
        </div>
        <div className="flex flex-col justify-around items-center">
          <button>Toggle Theme</button>
          <LogoutBtn />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BigSidebar;
