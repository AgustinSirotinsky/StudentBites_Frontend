import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';

import Principal from './components/Principal';
<<<<<<< HEAD
import Feed from './components/Feed';

=======
import CargarReseña from './components/CargarReseña';
>>>>>>> 053f8fd9ce8169ba597ddb7876c3e3bdd8dc6379

export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
<<<<<<< HEAD
        <Route path="/" element={<Feed />}></Route>
=======
        <Route path="/cargarReseña/:localId" element={<CargarReseña />}></Route>
>>>>>>> 053f8fd9ce8169ba597ddb7876c3e3bdd8dc6379
      </Routes>
    </BrowserRouter>
  );
}

