//React
import { Link } from "react-router-dom";
import React, { useState } from 'react';

//Bostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

//Other

export default function Search () {

    const [local, setLocal] = useState("");
    const handleLocalChange = (e) => {
        setLocal(e.target.value);
        console.log(local);
        fetch(`http://localhost:3000/local/nombre/${local}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };
    return (
    <Form.Control type="text" placeholder="Buscar local" autoComplete="off" onChange={handleLocalChange} />
    )
}