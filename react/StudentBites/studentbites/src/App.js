import logo from './assets/logo.png';
import Ja from './assets/Ja.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
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
    // <>
    // <NavBarTest></NavBarTest>
    // <UserSlider></UserSlider>
    // </>
    <h1>SEX</h1>
  );
}

export default App;
