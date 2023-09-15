import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./UserSlider.css";
import 'bootstrap/dist/css/bootstrap.min.css';



// Configuración de cuántos elementos mostrar por página del slider en función del tamaño de la pantalla

export default function UserSlider() {
  const [locales, setLocales] = useState([]);


  useEffect(() => {
    fetch(`http://localhost:3000/locales/`)
    .then(res => res.json())
    .then((res) => setLocales(res))
    .catch(err => console.log(err));  
  }, []);

  return (
    <>
    </>
  );}