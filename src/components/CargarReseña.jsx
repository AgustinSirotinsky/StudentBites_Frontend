import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';

export default function CargarReseña (){
    const params=useParams();
    console.log(params.localId);

    const [local, setLocal] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/local/${params.localId}`)
        .then(res => res.json())
        .then((res) => setLocal(res))
        .catch(err => console.log(err));  
  }, []);
    return (
        <>
        {console.log(local.Calificacion)}
        </>
    )
}