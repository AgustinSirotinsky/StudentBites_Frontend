import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';

<<<<<<< HEAD
import Principal from './components/Principal';
import Feed from './components/Feed';
import CargarReseña from './components/CargarReseña';
import PageLocal from './components/PageLocal';

=======
import Principal from './components/routes/Principal';
import Feed from './components/routes/Feed';
import CargarReseña from './components/routes/CargarReseña';
import IniciarSesion from './components/routes/IniciarSesion';
import RecuperarContraseña from './components/routes/RecuperarContraseña';
import CrearCuenta from './components/routes/CrearCuenta';
>>>>>>> f96dce4168548d7a7233ab1bf43822bd9b1e6d7a

export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
<<<<<<< HEAD
        <Route path="/cargarreseña/:localId" element={<CargarReseña/>}></Route>
        <Route path="/PageLocal/:localId" component={PageLocal} />

=======
        <Route path="/cargarreseña/:localId" element={<CargarReseña />}></Route>
        <Route path="/iniciarsesion" element={<IniciarSesion />}></Route>
        <Route path="/recuperarcontraseña" element={<RecuperarContraseña />}></Route>
        <Route path="/crearcuenta" element={<CrearCuenta />}></Route>
>>>>>>> f96dce4168548d7a7233ab1bf43822bd9b1e6d7a
      </Routes>
    </BrowserRouter>
  );
}

