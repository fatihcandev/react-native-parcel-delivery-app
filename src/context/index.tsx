import React, { useReducer } from 'react';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { IParcelDetails } from 'types';

export const SET_NOTIFICATION_DATA = 'SET_NOTIFICATION_DATA';
export const TAP_NOTIFICATION = 'TAP_NOTIFICATION';
export const CLEAR_NOTIFICATION_DATA = 'CLEAR_NOTIFICATION_DATA';
export const SET_PARCEL_DETAILS = 'SET_PARCEL_DETAILS';
export const SET_UPLOADED_PICTURES = 'SET_UPLOADED_PICTURES';

interface IAppState {
  notification?: FirebaseMessagingTypes.RemoteMessage;
  notificationTapped?: boolean;
  parcelDetails?: IParcelDetails;
  uploadedPictures?: string[];
}
export interface IAction<T> {
  type: string;
  data?: T;
}
const initialState: IContext<IAppState> = {
  state: {
    notification: {},
    notificationTapped: false,
    parcelDetails: {
      id: '',
      company: '',
      status: [],
      lastUpdate: '',
      progress: 0,
    },
    uploadedPictures: [],
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
    case SET_UPLOADED_PICTURES:
      return {
        ...state,
        uploadedPictures: [
          ...(state.uploadedPictures || []),
          ...action.data?.uploadedPictures!,
        ],
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
