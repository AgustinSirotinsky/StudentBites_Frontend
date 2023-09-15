import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';

import Principal from './components/routes/Principal';
import Feed from './components/routes/Feed';
import CargarReseña from './components/routes/CargarReseña';
import IniciarSesion from './components/routes/IniciarSesion';
import RecuperarContraseña from './components/routes/RecuperarContraseña';

export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
        <Route path="/cargarreseña/:localId" element={<CargarReseña />}></Route>
        <Route path="/iniciarsesion" element={<IniciarSesion />}></Route>
        <Route path="recuperarcontraseña" element={<RecuperarContraseña />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

