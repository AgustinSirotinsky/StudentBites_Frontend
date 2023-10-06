import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

export default function LocalContent() {
  const { localId } = useParams();
  const [local, setLocal] = useState({}); // Inicializa como un objeto vacío

  useEffect(() => {
    console.log('Estás en el local con ID: ', localId);
    fetch(`http://localhost:3000/local/${localId}`)
      .then(res => res.json())
      .then((res) => {
        console.log('local', res); // Verifica el contenido de la respuesta
        setLocal(res[0]); // Establece el estado local con los datos del local
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <a>{local.ID}</a>
      <h1>{local.Nombre}</h1> {/* Muestra el nombre del local */}
    </>
  );
}
