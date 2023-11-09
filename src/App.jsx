import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error from './pages/Error';
import Footer from './components/Layout/Footer';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import AuthHandler from './services/authHandlerService.jsx';

function App() {
  return (
    <Provider store={store}>
      <AuthHandler />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
