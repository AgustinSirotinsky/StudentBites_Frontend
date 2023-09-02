import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';

import Principal from './components/routes/Principal';
import Feed from './components/routes/Feed';
import CargarReseña from './components/routes/CargarReseña';


export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/cargarreseña/:localId" element={<CargarReseña/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

