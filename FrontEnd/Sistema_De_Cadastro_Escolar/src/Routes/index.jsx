import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Page404 from '../pages/Page404';
import AlunosPage from '../pages/Alunos';
import PrivateRoute from './PrivateRoute';
import UsuarioPage from '../pages/Usuario';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/alunos"
        element={<PrivateRoute element={<AlunosPage />} isClose={true} />}
      />
      <Route
        path="/usuario"
        element={<PrivateRoute element={<UsuarioPage />} isClose={true} />}
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
