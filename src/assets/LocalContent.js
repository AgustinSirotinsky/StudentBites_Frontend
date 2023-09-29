import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';


// Configuración de cuántos elementos mostrar por página del slider en función del tamaño de la pantalla

export default function LocalContent() {
  const {localId} = useParams();
  const [local, setLocal] = useState({});

  useEffect(() => {
    console.log('localId', localId)
    fetch(`http://localhost:3000/local/${localId}`)
    .then(res => res.json())
    .then((res) => setLocal(res))
    .catch(err => console.log(err));
  }, []);

  return (
    <>
    <h1>aaa</h1>
    </>
  );}