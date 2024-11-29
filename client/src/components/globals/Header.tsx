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
import { AppContextType, useAppContext } from '@/context/appContext';

function Header() {
  const { user } = useAppContext() as AppContextType;

  return (
    <Container>
      <header className="rounded-md shadow-sm z-10 bg-primary-foreground dark:bg-secondary border-b">
        <nav className="p-4 transition-all">
          <div className="mx-4 flex justify-between items-center flex-wrap">
            {/* LEFT SIDE */}
            <div className="flex justify-start items-center">
              <BigSidebar />
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center space-x-3 md:space-x-6">
              <button className="p-2 rounded-full bg-secondary text-primary dark:bg-primary dark:text-secondary-foreground">
                <PiBellRingingDuotone size={24} />
              </button>
              <Avatar>
                <AvatarImage />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user?.name.charAt(0).toUpperCase() || 'UR'}
                </AvatarFallback>
              </Avatar>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-primary dark:text-secondary-foreground">
                    <BiSolidChevronDown size={20} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 my-4" align="end">
                  <DropdownMenuLabel className="capitalize">
                    {user?.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-primary dark:bg-muted" />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary dark:bg-muted" />
                  <div className="flex flex-col items-start space-y-4 m-2">
                    <ToggleTheme />
                    <LogoutBtn />
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
