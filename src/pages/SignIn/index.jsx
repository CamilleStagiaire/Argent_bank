import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, setFirstName, setLastName  } from '../../redux/userSlice';
import localStorageService from '../../services/localStorageService';
import apiService from '../../services/apiService';

/**
 * Page de connexion
 * @returns {React.ReactElement}
 */
const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    }
  }, [isAuthenticated, navigate]);
  
  /**
   * Gère la soumission du formulaire de connexion
   * @param {Event} event
   */
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.username.value;
    const password = event.target.password.value;

    const result = await apiService.login(email, password);
    if (result.success) {
      const token = result.token;
      dispatch(signIn(email));

      // Récupérer le profil de l'utilisateur
      const profileResult = await apiService.getUserProfile(token);
      if (profileResult) {
        dispatch(setFirstName(profileResult.firstName));
        dispatch(setLastName(profileResult.lastName));
        
        localStorageService.setAuthData(email, token, profileResult.firstName, profileResult.lastName);
        navigate('/profile');
      }
    } else {
      alert(result.message);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
