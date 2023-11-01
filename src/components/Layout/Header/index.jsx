import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../../redux/userSlice';
import logo from '../../../assets/argentBankLogo.png';
import localStorageService from '../../../services/localStorageService';

const Header = () => {
  const dispatch = useDispatch();
  const firstName = useSelector((state) => state.user.firstName);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Gestionnaire pour la déconnexion
  const handleSignOut = () => {
    dispatch(signOut());
    localStorageService.clearAuthData();
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/" aria-label="Argent Bank Home">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
          onClick={handleSignOut}

        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <>
            <Link
              className="main-nav-item"
              to="/profile"
              aria-label="User profile"
            >
              <i className="fa fa-user-circle"></i> {firstName}
            </Link>
            <Link
              to="/"
              className="main-nav-item"
              onClick={handleSignOut}
              aria-label="Sign out"
            >
              <i className="fa fa-sign-out"></i> Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link className="main-nav-item" to="/login" aria-label="Sign in">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
