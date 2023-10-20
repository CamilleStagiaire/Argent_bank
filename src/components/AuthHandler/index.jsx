import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/userSlice';
import localStorageService from '../../services/localStorageService';

const AuthHandler = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { isAuthenticated, username } = localStorageService.getAuthData();

    if (isAuthenticated) {
        dispatch(signIn(username));
    }
  }, [dispatch]);

  return null; 
};

export default AuthHandler;
