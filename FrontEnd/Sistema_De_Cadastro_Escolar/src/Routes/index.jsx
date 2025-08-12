import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';
import Page404 from '../pages/Page404';

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
