import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, setFirstName } from '../../redux/userSlice';
import localStorageService from '../../services/localStorageService';

const AuthHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { isAuthenticated, username, firstName  } = localStorageService.getAuthData();

    if (isAuthenticated) {
        dispatch(signIn(username));
        dispatch(setFirstName(firstName));
    }
  }, [dispatch]);

  return null; 
};

export default AuthHandler;
