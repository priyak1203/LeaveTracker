import { AppContextType, useAppContext } from '@/context/appContext';
import { TbLogout2 } from 'react-icons/tb';

function LogoutBtn() {
  const { logout } = useAppContext() as AppContextType;

  return (
    <button
      className="bg-purple-700  text-white p-1 rounded-full dark:bg-slate-600"
      onClick={() => logout()}
    >
      <TbLogout2 size={24} />
    </button>
  );
}

export default LogoutBtn;
