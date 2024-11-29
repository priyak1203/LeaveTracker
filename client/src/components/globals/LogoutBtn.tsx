import { AppContextType, useAppContext } from '@/context/appContext';
import { TbLogout2 } from 'react-icons/tb';

function LogoutBtn() {
  const { logout } = useAppContext() as AppContextType;

  return (
    <button
      className="p-1 rounded-full bg-primary text-primary-foreground dark:bg-secondary-foreground dark:text-primary"
      onClick={() => logout()}
    >
      <TbLogout2 size={24} />
    </button>
  );
}

export default LogoutBtn;
