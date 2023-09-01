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
    const [selectedComida, setSelectedComida] = useState(null);
    const handleComidaChange = (e) => {
        setSelectedComida(e.target.value);
      };

    //Ayuda a la seleccion de precio
    const [selectedPrecio, setSelectedPrecio] = useState(null);
    const handlePrecioChange = (e) => {
        setSelectedPrecio(e.target.value);
      };
    
    //Ayuda a la seleccion de tardanza
    const [selectedTardanza, setSelectedTardanza] = useState(null);
    const handleTardanzaChange = (e) => {
        setSelectedTardanza(e.target.value);
      };

      //Ayuda a la seleccion de poblacion
    const [selectedPoblacion, setselectedPoblacion] = useState(null);
    const handlePoblacionChange = (e) => {
        setselectedPoblacion(e.target.value);
      };

    //Ayuda a la calificacion
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };


    return (
        <div className="container">
            {console.log("")}
            <h1 className="centered-title">{Local.Nombre}</h1>

            <h2>Comida:</h2>
                <Form.Select 
                    aria-label=""
                    value={selectedComida}
                    onChange={handleComidaChange}>
                        {tiposDeComida.map(item => (
                        <option key={item.ID} value={item.Comida}>
                            {item.Comida}
                        </option>
                        ))}
                        {console.log("Comida: " + selectedComida)}
                    </Form.Select>
            
            <h2>Precio:</h2>
                <Form.Select 
                aria-label="Default select example"
                value={selectedPrecio}
                onChange={handlePrecioChange}>
                    <option value="1">Menos de $800</option>
                    <option value="2">Entre $800 y $1200</option>
                    <option value="3">Mas de $1200</option>
                    {console.log("Precio: " + selectedPrecio)}
                </Form.Select>


            <h2>Tardanza:</h2>
                <Form.Select 
                    aria-label="Default select example"
                    value={selectedTardanza}
                    onChange={handleTardanzaChange}>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                        {console.log("Tradanza: " + selectedTardanza)}
                </Form.Select>

            <h2>Poblacion:</h2>
            <Form.Select 
                    aria-label="Default select example"
                    value={selectedPoblacion}
                    onChange={handlePoblacionChange}>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                        {console.log("Poblacion: " + selectedPoblacion)}
                </Form.Select>    

                <div className='stars'>
                    <h2>Calificacion:</h2>
                    <StarRating rating={rating} onRatingChange={handleRatingChange} />
                    {console.log("Calificacion: " + rating)}
                </div>
            <h2>Descripcion:</h2>
            </div>
    )
}