import React, { useReducer } from 'react';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { IParcelDetails } from 'types';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export const SET_NOTIFICATION_DATA = 'SET_NOTIFICATION_DATA';
export const TAP_NOTIFICATION = 'TAP_NOTIFICATION';
export const CLEAR_NOTIFICATION_DATA = 'CLEAR_NOTIFICATION_DATA';
export const SET_PARCEL_DETAILS = 'SET_PARCEL_DETAILS';
export const AUTH_FINISHED = 'AUTH_FINISHED';
export const VERIFY_PHONE_NUMBER = 'VERIFY_PHONE_NUMBER';

interface IAppState {
  authLoading?: boolean;
  notification?: FirebaseMessagingTypes.RemoteMessage;
  notificationTapped?: boolean;
  parcelDetails?: IParcelDetails;
  phoneNumber?: string;
  confirmationResult?: FirebaseAuthTypes.ConfirmationResult;
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    authLoading: true,
    notification: undefined,
    notificationTapped: false,
    parcelDetails: {
      id: '',
      company: '',
      status: [],
      lastUpdate: '',
      progress: 0,
    },
    phoneNumber: '',
    confirmationResult: undefined,
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
        notification: action.data?.notification,
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
    case SET_PARCEL_DETAILS:
      return {
        ...state,
        parcelDetails: action.data?.parcelDetails,
      };
    case AUTH_FINISHED:
      return {
        ...state,
        authLoading: false,
      };
    case VERIFY_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.data?.phoneNumber,
        confirmationResult: action.data?.confirmationResult,
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

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };
