import { PiBellRingingDuotone } from 'react-icons/pi';
import { BiSolidChevronDown } from 'react-icons/bi';
import Container from './Container';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import BigSidebar from './BigSidebar';
import LogoutBtn from './LogoutBtn';
import ToggleTheme from './ToggleTheme';

function Header() {
  const user = { name: 'Susan' };
  return (
    <Container>
      <header className="bg-white rounded-md shadow-sm dark:bg-black dark:border-b z-10">
        <nav className="p-4 transition-all">
          <div className="mx-4 flex justify-between items-center flex-wrap">
            {/* LEFT SIDE */}
            <div className="flex justify-start items-center">
              <BigSidebar />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center space-x-3 md:space-x-6">
              <button className="p-2 rounded-full bg-purple-100 text-purple-500">
                <PiBellRingingDuotone size={24} />
              </button>
              <Avatar>
                <AvatarImage />
                <AvatarFallback>LT</AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-slate-500 dark:text-slate-300">
                    <BiSolidChevronDown size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 my-4" align="end">
                  <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <div className="flex flex-col items-start space-y-4 m-2">
                    <LogoutBtn />
                    <ToggleTheme />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}

export default Header;
