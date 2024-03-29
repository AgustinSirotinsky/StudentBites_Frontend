//React
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//Other
import '../../assets/CargarReseña.css'
import StarRating from '../../assets/StarRating';
import { UserContext } from '../context/userContext';

export default function CargarReseña (){
    //Traigo el user para poder usar su id y cargar la reseña cpon el usuario que esta signedasdo REACT NATIVE
    const { user } = React.useContext(UserContext);
    //Llamada a la api para conseguir el local usando los params
    const params=useParams();
    const [Local, setLocal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/local/${params.localId}`)
        .then(res => res.json())
        .then(data => {
            setLocal(data[0])
        });
    }, []);

    //Llamada a la api para conseguir los tipos de comida
    const [tiposDeComida, setTiposDeComida] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/tipodecomida')
        .then (res=>res.json())
        .then(data => {
            setTiposDeComida(data)
            console.log(data)
        })
    }, [])

    //Ayuda a la seleccion de comida
    const [selectedComida, setSelectedComida] = useState(0);
    const handleComidaChange = (e) => {
        setSelectedComida(e.target.value);
      };

    //Ayuda a la seleccion de precio
    const [selectedPrecio, setSelectedPrecio] = useState(0);
    const handlePrecioChange = (e) => {
        setSelectedPrecio(e.target.value);
      };
    
    //Ayuda a la seleccion de tardanza
    const [selectedTardanza, setSelectedTardanza] = useState(0);
    const handleTardanzaChange = (e) => {
        setSelectedTardanza(e.target.value);
      };

      //Ayuda a la seleccion de poblacion
    const [selectedPoblacion, setselectedPoblacion] = useState(0);
    const handlePoblacionChange = (e) => {
        setselectedPoblacion(e.target.value);
      };

    //Ayuda a la descripcion
    const [descripcion, setDescripcion] = useState("");
    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    //Ayuda a la calificacion
    const [rating, setRating] = useState(0);
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };

    //Revisa antes de enviar si todos los campos estan completos
    const handleEnviar =() => {
        if (selectedComida===0 || selectedPrecio===0 || selectedTardanza===0 || selectedPoblacion===0 || rating===0 || descripcion===""){
            alert("Por favor rellene todos los campos")
            console.log("incompleto")
        }
        else {
            console.log('completo')
            console.log('localId: ' + params.localId)
            fetch('http://localhost:3000/resenias/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "UsuarioId": user.ID,
                    "LocalId": params.localId,
                    "Calificacion": rating,
                    "ComidaId": selectedComida,
                    "Precio": selectedPrecio,
                    "Tardanza": selectedTardanza,
                    "Poblacion": selectedPoblacion,
                    "Descripcion": descripcion
                })
            })
            .then (res=>res.json())
            .then(data => {
                console.log(data);
                console.log("Reseña enviada");
                window.location.href = "/home";
            });
        }
    }

    return (
        <div className="container">
            {console.log("")}
            <h1 className="centered-title">{Local.Nombre}</h1>

            <h2>Comida:</h2>
                <Form.Select 
                    aria-label=""
                    value={selectedComida}
                    onChange={handleComidaChange}>
                        <option value="0"></option>
                        {tiposDeComida.map(item => (
                        <option key={item.ID} value={item.ID}>
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
                    <option value="0"></option>
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
                        <option value="0"></option>
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
                        <option value="0"></option>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                        {console.log("Poblacion: " + selectedPoblacion)}
                </Form.Select>    

                <h2>Descripcion:</h2>
                    <Form.Control as="textarea" rows={3} value={descripcion} onChange={handleDescripcionChange}/>
                    {console.log("Descripcion: " + descripcion)}
                <div className='stars'>
                    <h2>Calificacion:</h2>
                    <StarRating rating={rating} onRatingChange={handleRatingChange} />
                    {console.log("Calificacion: " + rating)}
                </div>
                <br/>
                <div className='boton'>
                    <Button variant="success" onClick={handleEnviar}>Enviar</Button>
                </div>
            
            </div>
    )
}