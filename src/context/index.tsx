import React, { useReducer } from 'react';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const SET_NOTIFICATION_DATA = 'SET_NOTIFICATION_DATA';

interface IAppState {
  notification: FirebaseMessagingTypes.RemoteMessage;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    notification: {},
  },
  dispatch: (_value: IAction<IAppState>) => null,
};
export interface IContext<T> {
  state: T;
  dispatch: React.Dispatch<IAction<T>>;
}
const AppContext = React.createContext(initialState);
const reducer = (state: IAppState, action: IAction<IAppState>): IAppState => {
  switch (action.type) {
    case SET_NOTIFICATION_DATA:
      return {
        ...state,
        notification: action.data?.notification!,
      };
    default:
      return state;
  }
};

interface IAppProvider {
  children: any;
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState.state);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
