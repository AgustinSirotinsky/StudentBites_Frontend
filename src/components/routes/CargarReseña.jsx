import '../src/CargarReseña.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import StarRating from '../src/StarRating';

export default function CargarReseña (){
    const params=useParams();

    const [Local, setLocal] = useState([]);
    const [rating, setRating] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:3000/local/${params.localId}`)
        .then(res => res.json())
        .then(data => {
            setLocal(data[0])
        });
    }, []);

    const handleRatingChange = (newRating) => {
        setRating(newRating);
      };
    return (
        <div className="container">
            <h1 className="centered-title">{Local.Nombre}</h1>
            <h2>Comida:</h2>
            <h2>Precio:</h2>
            <h2>Tardanza:</h2>
            <h2>Poblacion:</h2>
            <h2>Descripcion:</h2>
                <div className='stars'>
                    <h2>Calificacion:</h2>
                    <StarRating rating={rating} onRatingChange={handleRatingChange} />
                    {console.log(rating)}
                </div>
            </div>
    )
}