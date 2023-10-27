import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import "./LocalContent.css";
import "react-multi-carousel/lib/styles.css";

export default function LocalContent() {
  const { localId } = useParams();
  const [local, setLocal] = useState({}); // Inicializa como un objeto vacío
  var localP;
  var localM = "";
  var tardaP;
  var tardaM = "";
  var ppA;
  var ppAM = "";

  useEffect(() => {
    console.log('Estás en el local con ID: ', localId);
    fetch(`http://localhost:3000/local/${localId}`)
      .then(res => res.json())
      .then((res) => {
        console.log('local', res); // Verifica el contenido de la respuesta
        setLocal(res[0]); // Establece el estado local con los datos del local
      })
      .catch(err => console.log(err));
  }, [console.log(local.PedirPorAdelantado)]);

    function ajustarPoblacion(localP) {
    if (localP === 1) {
      localM = "Baja";
    }
    else if (localP === 2)
    {
      localM = "Media";
    }
    else
    {
      localM = "Alta";
    }
    return localM;
  }
  function ajustarTardanza(tardaP) {
    if (tardaP === 1) {
      tardaM = "Baja";
    }
    else if (tardaP === 2)
    {
      tardaM = "Media";
    }
    else
    {
      tardaM = "Alta";
    }
    return tardaM;
  }
  function ppAdelantado(ppA) {
    if (ppA === true) {
      ppAM = "Si";
    }
    else
    {
      ppAM = "No";
    }
    return ppAM;
  }
  return (
    <>

      <div className="card-L mb-3">
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
    <div class="col">{ajustarPoblacion(local.Poblacion)}</div>
  </div>
  <div class="row mb-2">
    <div class="col bg-gray">Tardanza de la Comida</div>
    <div class="col bg-gray">{ajustarTardanza(local.Tardanza)}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Metodos de Pago</div>
    <div class="col">falta</div>
  </div>
  <div class="row mb-2">
    <div class="col bg-gray">Pedir por Adelantado</div>
    <div class="col bg-gray">{ppAdelantado(local.PedirPorAdelantado)}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Contacto</div>
    <div class="col">{local.Contacto}</div>
  </div>
</div>
<div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-success" type="button">Dejar Reseña</button>
  <button type="button">Ver Reseñas</button>
</div>
    </>
  );
}
