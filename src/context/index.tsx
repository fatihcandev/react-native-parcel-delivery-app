import React, { useReducer } from 'react';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

export const SET_NOTIFICATION_DATA = 'SET_NOTIFICATION_DATA';
export const CLEAR_NOTIFICATION_DATA = 'CLEAR_NOTIFICATION_DATA';
export const TAP_NOTIFICATION = 'TAP_NOTIFICATION';

interface IAppState {
  notification?: FirebaseMessagingTypes.RemoteMessage;
  notificationTapped?: boolean;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    notification: {},
    notificationTapped: false,
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
    case TAP_NOTIFICATION:
      return {
        ...state,
        notificationTapped: true,
      };
    case CLEAR_NOTIFICATION_DATA:
      return {
        ...state,
        notification: {},
        notificationTapped: false,
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
