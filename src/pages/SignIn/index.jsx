import { useDispatch } from 'react-redux';
import { signIn, setFirstName } from '../../redux/userSlice';
import localStorageService from '../../services/localStorageService';
import apiService from '../../services/apiService';

const SignIn = () => {
  const dispatch = useDispatch();

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
        localStorageService.setAuthData(email, token, profileResult.firstName);
        window.location.href = '/user';
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
