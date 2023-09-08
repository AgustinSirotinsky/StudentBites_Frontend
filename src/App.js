import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBarTest from './assets/NavBarTest';

import Principal from './components/Principal';
import Feed from './components/Feed';
import CargarReseña from './components/CargarReseña';


export default function App() {
  return (
    <BrowserRouter>
    <NavBarTest></NavBarTest>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/Feed" element={<Feed />}></Route>
        <Route path="/cargarreseña/:localId" element={<CargarReseña/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

