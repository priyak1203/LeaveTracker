import { createContext, useContext, useReducer } from 'react';
import { UserType } from '@/utils/types';
import reducer from './reducer';
import { SET_USER } from './actions';
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from '@/utils/localStorage';

export type AppContextType = {
  user: UserType | null;
  setUser: (user: UserType) => void;
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
  const { user } = state;

  const setUser = (user: UserType) => {
    dispatch({ type: SET_USER, payload: user });
    addUserToLocalStorage(user);
  };

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
