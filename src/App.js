//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProvider from './components/context/userContext';

//Routes
import Principal from './components/routes/Principal';
import Feed from './components/routes/Feed';
import CargarReseña from './components/routes/CargarReseña';
import IniciarSesion from './components/routes/IniciarSesion';
import RecuperarContraseña from './components/routes/RecuperarContraseña';
import CrearCuenta from './components/routes/CrearCuenta';
import PageLocal from './components/routes/PageLocal';
import Layout from './components/routes/Layout';
import Search from './components/routes/Search';
import Profile from './components/routes/Profile';

export default function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<IniciarSesion />}></Route>
        <Route path="/crearcuenta" element={<CrearCuenta />}></Route>
        <Route path="/recuperarcontraseña" element={<RecuperarContraseña />}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="/Feed" element={<Feed />}></Route>
            <Route path="/cargarreseña/:localId" element={<CargarReseña/>}></Route>
            <Route path="/PageLocal/:localId" element={<PageLocal/>} />
            <Route path="/home" element={<Principal />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

