import { AppContextType, useAppContext } from '@/context/appContext';
import { HiOutlineSun } from 'react-icons/hi2';
import { MdOutlineNightlightRound } from 'react-icons/md';

function ToggleTheme() {
  const { isDarkTheme, toggleDarkTheme } = useAppContext() as AppContextType;

  return (
    <>
      <button
        className="p-1 rounded-full bg-primary text-primary-foreground dark:bg-secondary-foreground dark:text-primary "
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? (
          <HiOutlineSun size={24} />
        ) : (
          <MdOutlineNightlightRound size={22} />
        )}
      </button>
    </>
  );
}

export default ToggleTheme;
