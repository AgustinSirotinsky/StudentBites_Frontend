import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import "./LocalContent.css";
import "react-multi-carousel/lib/styles.css";
import Ja from './Ja.jpg';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from "react-router-dom";

export default function LocalContent() {
  const { localId } = useParams();
  const [local, setLocal] = useState({}); // Inicializa como un objeto vacío
  const [reviews, setReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [liked, setLiked] = useState(false);

  const toggleLike = (ID) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [ID]: !prevLiked[ID],
    }));
  };

  var localP;
  var localM = "";
  var tardaP;
  var tardaM = "";
  var ppA;
  var ppAM = "";

  function toggleReviewsHandler() {
    setShowReviews(!showReviews);
  }

  useEffect(() => {
    console.log('Estás en el local con ID: ', localId);
    fetch(`http://localhost:3000/local/${localId}`)
      .then(res => res.json())
      .then((res) => {
        console.log('local', res); /*Verifica el contenido de la respuesta*/ setLocal(res[0]); /*Establece el estado local con los datos del local*/})
      .catch(err => console.log(err));
  }, []);

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
  console.log(localId);
  useEffect(() => {
    fetch(`http://localhost:3000/resenia/local/${localId}`)
    .then(response => response.json())
    .then((response) => {console.log(response); setReviews(response);})
    .catch(err => console.log(err));
  }, []);

  console.log(reviews)

  return (
    <>
      <img alt="" className="full-width-image" src={local.Portada}/>
      <div className="text-center">
        <h1>{local.Nombre}</h1>
      </div>
      <div className="rating">
        (calificacion)
      </div>
      <div class="container text-center">
  <div class="row mb-2">
    <div class="col custom-text">Dirección</div>
    <div class="col custom-text">{local.Direccion}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Tipo de comida</div>
    <div class="col">falta</div>
  </div>
  <div class="row mb-2">
    <div class="col custom-text">Precios</div>
    <div class="col custom-text">{local.Precio}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Concurrencia</div>
    <div class="col">{ajustarPoblacion(local.Poblacion)}</div>
  </div>
  <div class="row mb-2">
    <div class="col custom-text">Tardanza de la Comida</div>
    <div class="col custom-text">{ajustarTardanza(local.Tardanza)}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Metodos de Pago</div>
    <div class="col">falta</div>
  </div>
  <div class="row mb-2">
    <div class="col custom-text">Pedir por Adelantado</div>
    <div class="col custom-text">{ppAdelantado(local.PedirPorAdelantado)}</div>
  </div>
  <div class="row mb-2">
    <div class="col">Contacto</div>
    <div class="col">{local.Contacto}</div>
  </div>
</div>
      <div className="centered-buttons">
        <Link to={`/cargarreseña/${localId}`}>
        <button className="btn btn-success button-large" type="button">Dejar Reseña</button>
        </Link>
        <button className="button-large" type="button" onClick={toggleReviewsHandler}>
          {showReviews ? 'Ocultar Reseñas' : 'Ver Reseñas'}
        </button>
      </div>
    {showReviews && (
    <div className="row mb-2">
      {reviews.map((review, index) => (
        <div className="reviewLocal-card" key={index}>
          <div className="user-profile">
            <img src={Ja} className="rounded-circle" width="60" height="60" alt="User Avatar" />
          </div>
          <div className="reviewLocal-text">
            {review.Descripcion}
          </div>
          <div className="like-section">
            <div className="likes">
              <button onClick={() => toggleLike(review.ID)} className="like-button">
                {liked[review.ID] ? <FaHeart className="liked-icon" /> : <FaRegHeart className="unliked-icon" />}
              </button>
            </div>
          </div>
      </div>
    ))}
  </div>
)}

    </>
  );
}
