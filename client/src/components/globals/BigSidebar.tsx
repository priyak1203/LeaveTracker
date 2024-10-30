import { TiThMenu } from 'react-icons/ti';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function BigSidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 bg-blue-100 rounded-full text-blue-500">
          <TiThMenu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-56 flex flex-col justify-between">
        <div>
          <div className="flex mt-3 mb-3 justify-center ">
            <span className="w-10 h-10 p-2 flex items-center justify-center bg-blue-800 text-white rounded-full">
              LT
            </span>
          </div>
          <nav className="flex flex-col items-center px-3 py-4 overflow-y-auto">
            <p>Icon 1</p>
            <p>Icon 2</p>
            <p>Icon 3</p>
          </nav>
        </div>
        <div className="flex flex-col justify-around items-center">
          <button>Toggle Theme</button>
          <button className="text-slate-500 dark:text-slate-300">Logout</button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BigSidebar;
