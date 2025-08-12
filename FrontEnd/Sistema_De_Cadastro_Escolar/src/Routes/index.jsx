import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/Login';

export default function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
