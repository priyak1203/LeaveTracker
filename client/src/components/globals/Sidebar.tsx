import { adminLinks, moderatorLinks, userLinks } from '@/utils/links';
import { RenderIconsLinks } from './NavLinks';

function Sidebar() {
  // temp
  const user = {
    role: 'USER',
  };

  const adminLinksRender = () => {
    return <>{RenderIconsLinks({ links: adminLinks })}</>;
  };

  const moderatorLinksRender = () => {
    return <>{RenderIconsLinks({ links: moderatorLinks })}</>;
  };

  const userLinksRender = () => {
    return <>{RenderIconsLinks({ links: userLinks })}</>;
  };

  return (
    <div className="hidden sm:block fixed inset-y-0 left-0 w-[5rem] bg-white rounded-lg overflow-hidden dark:bg-black dark:border-r">
      <div className="flex flex-col justify-between items-center h-full">
        {/* TOP PART */}
        <div>
          <div className="mt-8 flex justify-center items-center">
            <span className="w-10 h-10 p-2 flex items-center justify-center bg-purple-700 text-white rounded-full">
              LT
            </span>
          </div>
          <nav className="flex flex-col px-3 py-4 overflow-y-auto">
            {user?.role === 'ADMIN' && adminLinksRender()}
            {user?.role === 'MODERATOR' && moderatorLinksRender()}
            {user?.role === 'USER' && userLinksRender()}
          </nav>
        </div>

        {/* BOTTOM PART */}
        <div className="flex flex-col items-center space-y-6 my-8">
          <button>Th To</button>
          <button>LgO</button>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
