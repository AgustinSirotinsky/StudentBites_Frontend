import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSlider from './assets/UserSlider';
import NavBarTest from './assets/NavBarTest';
import React, { useEffect, useState } from "react";


function App() {
    useEffect(() => {
      fetch('/locales')
      .then(res => res.json())
      .then(res => {
      })
    })
  return (
    <>
    <NavBarTest></NavBarTest>
    <UserSlider></UserSlider>
    </>
  );
}

export default App;
