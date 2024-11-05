import { HiOutlineSun } from 'react-icons/hi2';
import { MdOutlineNightlightRound } from 'react-icons/md';

function ToggleTheme() {
  // temp

  const currentTheme = 'dark';
  return (
    <>
      <button className="bg-purple-700 p-1 rounded-full text-white dark:bg-slate-600 ">
        {currentTheme === 'dark' ? (
          <HiOutlineSun size={24} />
        ) : (
          <MdOutlineNightlightRound size={22} />
        )}
      </button>
    </>
  );
}

export default ToggleTheme;
