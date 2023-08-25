import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSlider from './assets/UserSlider';
import NavBarTest from './assets/NavBarTest';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Principal from './components/Principal';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

