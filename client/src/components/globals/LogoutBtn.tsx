import { TbLogout2 } from 'react-icons/tb';

function LogoutBtn() {
  return (
    <button
      className="bg-purple-700  text-white p-1 rounded-full dark:bg-slate-600"
      onClick={() => console.log('logout user')}
    >
      <TbLogout2 size={24} />
    </button>
  );
}

export default LogoutBtn;
