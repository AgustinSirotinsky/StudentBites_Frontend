//React
import { Link } from "react-router-dom";
import React, { useState } from 'react';

//Bostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//Other

export default function Search () {
    const [localData, setLocalData] = useState([]);
    const [local, setLocal] = useState("");
    const handleLocalChange = (e) => {
        setLocal(e.target.value);
        console.log(local);
    };
    const searchLocal = () => {
        fetch(`http://localhost:3000/local/nombre/${local}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setLocalData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }
    return (
        <>
        <div className="d-flex">
          <Form.Control type="text" placeholder="Buscar local" autoComplete="off" onChange={handleLocalChange} />
          <Button variant="primary" onClick={searchLocal}>Search</Button>
        </div>
        {localData.map((localItem) => (
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
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }