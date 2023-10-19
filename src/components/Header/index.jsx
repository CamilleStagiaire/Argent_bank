import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/argentBankLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Header
 * @returns {React.Element}
 */
const Header = () => {
  return (
    <nav className="main-nav">
        <Link className="main-nav-logo" to="/" aria-label="Argent Bank Home">
            <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            <Link className="main-nav-item" to="/sign-in" aria-label="Sign in">
                <FontAwesomeIcon icon={faUserCircle} /> Sign In
            </Link>
        </div>
    </nav>
  );
};

export default Header;
