import { UserType } from '@/utils/types';
import { StateType } from './appContext';
import { SET_USER } from './actions';

type ActionType = { type: string; payload: UserType };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
