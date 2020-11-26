import { useCallback, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { AppContext, CLEAR_NOTIFICATION_DATA } from 'context';

const useNavigateFromNotification = () => {
  const navigator = useNavigation();
  const { state, dispatch } = useContext(AppContext);

  const navigateFromNotification = useCallback(() => {
    const type = state.notification?.messageType || '';
    const route = state.notification?.data?.route;
    if (route && type !== 'foreground') {
      navigator.navigate(route);
      dispatch({
        type: CLEAR_NOTIFICATION_DATA,
      });
    }
    if (route && state.notificationTapped) {
      navigator.navigate(route);
      dispatch({
        type: CLEAR_NOTIFICATION_DATA,
      });
    }
  }, [dispatch, navigator, state.notification, state.notificationTapped]);

  return navigateFromNotification;
};

export default useNavigateFromNotification;
