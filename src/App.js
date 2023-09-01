import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';
<<<<<<< HEAD
import Principal from './components/Principal';
import Feed from './components/Feed';
=======

import Principal from './components/routes/Principal';
import Feed from './components/routes/Feed';
import CargarReseña from './components/routes/CargarReseña';
>>>>>>> 199c299e2b8c0fe63d2d7d401b61dacd03751e7e


export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
<<<<<<< HEAD
        <Route path="/Principal" element={<Principal />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
=======
        <Route path="/" element={<Principal />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/cargarreseña/:localId" element={<CargarReseña/>}></Route>
>>>>>>> 199c299e2b8c0fe63d2d7d401b61dacd03751e7e
      </Routes>
    </BrowserRouter>
  );
}

