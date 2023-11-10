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
    const [precio, setPrecio] = useState(0);
    const handlePrecioChange = (e) => {
            setPrecio(e.target.value);
            console.log(e.target.value)
    }

    return (
            <>
            <div className="d-flex">
                <Form.Control type="text" placeholder="Buscar local" autoComplete="off" onChange={handleLocalChange} />
                <MdOutlineFilterList size="50" onClick={handleFilterChange}/>
            </div>
            {(filterOption) && (
            <Card bg="white">
                    <Form.Label style={{ color: 'black' }} >Precio</Form.Label>
                    <Form.Range onChange={handlePrecioChange} min={0} max={2000} />
            </Card>
                )}
        {localData.map((localItem) => (
        <>
            {(localItem.Precio>=1000) && (
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