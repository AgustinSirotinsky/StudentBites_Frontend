import '../src/CargarReseña.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import StarRating from '../src/StarRating';
import Form from 'react-bootstrap/Form';

export default function CargarReseña (){

    //llamada a la api para conseguir el local usando los params
    const params=useParams();
    const [Local, setLocal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/local/${params.localId}`)
        .then(res => res.json())
        .then(data => {
            setLocal(data[0])
        });
    }, []);

    //llamada a la api para conseguir los tipos de comida
    const [tiposDeComida, setTiposDeComida] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/tipodecomida')
        .then (res=>res.json())
        .then(data => {
            setTiposDeComida(data)
        })
    }, [])

    //Ayuda a la seleccion de comida
    const [selectedComida, setSelectedComida] = useState('');
    const handleComidaChange = (e) => {
        setSelectedComida(e.target.value);
      };

    //Ayuda a la calificacion
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    return (
        <div className="container">
            <h1 className="centered-title">{Local.Nombre}</h1>

            <h2>Comida:</h2>
                <Form.Select 
                    aria-label=""
                    value={selectedComida}
                    onChange={handleComidaChange}>
                        {tiposDeComida.map(comida => (
                        <option key={comida.ID} value={comida.Comida}>
                            {comida.Comida}
                        </option>
                        ))}
                    </Form.Select>
                {console.log(selectedComida)}
            
            <h2>Precio:</h2>
                <Form.Select aria-label="Default select example">
                    <option value="1">Menos de $800</option>
                    <option value="2">Entre $800 y $1200</option>
                    <option value="3">Mas de $1200</option>
                </Form.Select>

            <h2>Tardanza:</h2>

            <h2>Poblacion:</h2>
                <div className='stars'>
                    <h2>Calificacion:</h2>
                    <StarRating rating={rating} onRatingChange={handleRatingChange} />
                    {console.log(rating)}
                </div>
            <h2>Descripcion:</h2>
            </div>
    )
}