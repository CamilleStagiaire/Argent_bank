import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, setFirstName, setLastName } from '../../redux/userSlice';
import localStorageService from '../../services/localStorageService';

const AuthHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { isAuthenticated, username, firstName, lastName  } = localStorageService.getAuthData();

    if (isAuthenticated) {
        dispatch(signIn(username));
        dispatch(setFirstName(firstName));
        dispatch(setLastName(lastName));
    }
  }, [dispatch]);

  return null; 
};

export default AuthHandler;
