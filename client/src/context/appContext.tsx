import { createContext, useContext, useReducer, useState } from 'react';
import { UserType } from '@/utils/types';
import reducer from './reducer';
import { CLEAR_USER, SET_USER } from './actions';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from '@/utils/localStorage';

const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark', isDarkTheme);
  return isDarkTheme;
};

export type AppContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
  logout: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
};

export type StateType = {
  user: UserType | null;
};

const initialState: StateType = {
  user: getUserFromLocalStorage(),
};

const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const { user } = state;
  checkDefaultTheme();
  const setUser = (user: UserType) => {
    dispatch({ type: SET_USER, payload: user });
    addUserToLocalStorage(user);
  };

  const logout = () => {
    dispatch({ type: CLEAR_USER });
    removeUserFromLocalStorage();
  };

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark', newDarkTheme);
    localStorage.setItem('darkTheme', JSON.stringify(newDarkTheme));
  };

  return (
    <AppContext.Provider
      value={{ user, setUser, logout, isDarkTheme, toggleDarkTheme }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
