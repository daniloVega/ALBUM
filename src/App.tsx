import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import RegistrationForm from './pages/auth/registration/Registration';
import LoginForm from './pages/auth/login/Login';
import Home from './pages/home/Home';
import AuthGuard from './guards/auth-guard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthGuard element={<Home />} />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/login" element={<LoginForm />} />
      {/* Add more routes here */}
    </Routes>
  );
}

export default App;
