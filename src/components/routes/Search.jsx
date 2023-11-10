//React
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

//Bostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//Icons
import { FaBeer } from 'react-icons/fa';
import {MdOutlineFilterList} from 'react-icons/md'

//Other

export default function Search () {
    const [localData, setLocalData] = useState([]);
    const [filterOption, setFilterOption] = useState(false);
    
    useEffect(() => {
        fetch('http://localhost:3000/locales')
        .then (res => res.json())
        .then (data=> {
            setLocalData(data)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        //Valores default para que la busqueda muestre todos los resultados
    },[])

    const handleLocalChange = (e) => {
        console.log(e.target.value)
        console.log(filterOption)
        if (e.target.value==""){
            fetch('http://localhost:3000/locales')
        .then (res => res.json())
        .then (data=> {
            setLocalData(data)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        }
        else {
        fetch(`http://localhost:3000/local/nombre/${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLocalData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        };
    }

    //Filter function
    //Muestra y oculta la card donde estan los filtros
    const handleFilterChange = () => {
        if (filterOption==true){
            setFilterOption(false)
            console.log(`Filter option now ${filterOption}`)
        }
        else {
            setFilterOption(true)
            console.log(`Filter option now ${filterOption}`)
        }
    }
    //Precio
    const [precio, setPrecio] = useState(2500);
    const handlePrecioChange = (e) => {
        setPrecio(e.target.value);
        console.log(`Precio: $${e.target.value}`)
    }
    //Calificacion
    const [calificacion, setCalificacion] = useState(0);
    const handleCalificacionChange = (e) => {
        setCalificacion(e.target.value/2);
        console.log(`Calificacion: ${e.target.value}`)
    }
    //Distancia
    const [distancia, setDistancia] = useState(1000);
    const handleDistanciaChange = (e) => {
        setDistancia(e.target.value);
        console.log(`Distancia: ${e.target.value}m`)
    }
    //Poblacion
    const [poblacion, setPoblacion] = useState(5);
    const handlePoblacionChange = (e) => {
        setPoblacion(e.target.value);
        console.log(`Poblacion: ${e.target.value}`)
    }
    //Tardanza
    const [tardanza, setTardanza] = useState(3);
    const handleTardanzaChange = (e) => {
        setTardanza(e.target.value);
        console.log(`Tardanza: ${e.target.value}`)
    }
    //Pedir por adelantado
    const [switchChecked, setSwitchChecked] = useState(false);
    const handlePedirAdelantadoChange = () => {
        setSwitchChecked(!switchChecked);
        console.log(`Pedir por adelantado: ${switchChecked}`)
    }

    return (
            <>
            <div className="d-flex">
                <Form.Control type="text" placeholder="Buscar local" autoComplete="off" onChange={handleLocalChange} />
                <MdOutlineFilterList size="50" onClick={handleFilterChange}/>
            </div>
            {(filterOption) && (
            <Card bg="white">
                {/* Precio */}
                    <Form.Label style={{ color: 'black' }} >Precio ${precio}</Form.Label>
                    <Form.Range onChange={handlePrecioChange} min={1200} max={2500} />
                {/* Calificacion */}
                    <Form.Label style={{ color: 'black' }} >Calificacion ⭐{calificacion}</Form.Label>
                    <Form.Range onChange={handleCalificacionChange} min={0} max={10} />
                {/* Distancia */}
                    <Form.Label style={{ color: 'black' }} >Distancia {distancia}m</Form.Label>
                    <Form.Range onChange={handleDistanciaChange} min={120} max={1000} />
                {/* Poblacion */}
                    <Form.Label style={{ color: 'black' }} >Poblacion {(poblacion==1) && ('Baja poblacion') || (poblacion==2) && ('Media poblacion') || (poblacion==3) && ('Alta poblacion') || (poblacion==4) && ('Agobiante poblacion') || (poblacion==5) && ('Gente afuera del local')}</Form.Label>
                    <Form.Range onChange={handlePoblacionChange} min={1} max={5} />
                {/* Tardanza */}
                    <Form.Label style={{ color: 'black' }} >Tardanza {(tardanza==1) && ('Baja tardanza') || (tardanza==2) && ('Media tardanza') || (tardanza==3) && ('Alta tardanza')}</Form.Label>
                    <Form.Range onChange={handleTardanzaChange} min={1} max={3} />
                {/* Pedir por adelantado */}
                    <Form.Check style={{ color: 'black' }}
                        type="switch"
                        id="custom-switch"
                        label="Pedir por adelantado"
                        checked={switchChecked}
                        onChange={handlePedirAdelantadoChange}
                    />
            </Card>
                )}
        {localData.map((localItem) => (
        <>
        {(precio >= localItem.Precio) &&
        (localItem.Calificacion >= calificacion) &&
        (distancia >= localItem.Distancia) &&
        (poblacion >= localItem.Poblacion) &&
        (switchChecked ? localItem.PedirPorAdelantado : true) && // Add this condition
        (
            <Link to={`http://localhost:3001/PageLocal/${localItem.ID}`} style={{ color: '#000000' }}>
                <Card key={localItem.ID} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={localItem.Portada} />
                    <Card.Body>
                        <Card.Title>{localItem.Nombre}</Card.Title>
                        <Card.Text>
                            Calificacion: {localItem.Calificacion}
                            <br />
                            Contacto: {localItem.Contacto}
                            <br />
                            Direccion: {localItem.Direccion}
                            <br />
                            Precio: {localItem.Precio}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        )}
        </>
        ))}
      </>
    );
  }