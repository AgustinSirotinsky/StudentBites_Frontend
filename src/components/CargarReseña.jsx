import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function CargarReseña (){
    const params=useParams();

    const [Local, setLocal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/local/${params.localId}`)
        .then(res => res.json())
        .then(data => {
            setLocal(data[0])
        });
    }, []);
    return (
        <>
        <h1>{Local.Nombre}</h1>
        </>
    )
}