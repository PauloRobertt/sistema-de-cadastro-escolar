import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import Page404 from '../pages/Page404';
import PrivateRoute from './PrivateRoute';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
