import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import "./LocalContent.css";

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

  /* function ajustarPoblacion(local) {
    if (local.Poblacion == 1) {
      local.Poblacion = "baja";
    }
    else if (local.Poblacion == 2)
    {
      local.Poblacion = "media";
    }
    else
    {
      local.Poblacion = "alta";
    }
  }
  ajustarPoblacion(local.Poblacion);*/
  return (
    <>

      <div className="card mb-3">
        <img src={local.Portada} alt="" />
      </div>
      <div className="text-center">
        <h1>{local.Nombre}</h1>
      </div>
      <div class="container text-center">
  <div class="row mb-2">
    <div class="col bg-gray">Dirección</div>
    <div class="col bg-gray">{local.Direccion}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Tipo de comida</div>
    <div class="col">falta</div>
  </div>
  <div class="row mb-2">
    <div class="col bg-gray">Precios</div>
    <div class="col bg-gray">{local.Precio}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Concurrencia</div>
    <div class="col"></div>
  </div>
  <div class="row mb-2">
    <div class="col bg-gray">Tardanza de la Comida</div>
    <div class="col bg-gray">Column</div>
  </div>
  <div class="row mb-2">
    <div class="col">Metodos de Pago</div>
    <div class="col">Column</div>
  </div>
  <div class="row mb-2">
    <div class="col bg-gray">Pedir por Adelantado</div>
    <div class="col bg-gray">Column</div>
  </div>
  <div class="row mb-2">
    <div class="col">Contacto</div>
    <div class="col">Column</div>
  </div>
</div>


    </>
  );
}
