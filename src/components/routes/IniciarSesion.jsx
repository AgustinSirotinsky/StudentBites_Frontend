//React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from "bootstrap";

//Other
import '../../assets/IniciarSesion.css'
import logo from '../../assets/logo.png'

export default function IniciarSesion() {
    const [contraseñaIncorrecta, setContraseñaIncorrecta] = useState(false);

    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
    };

    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    };

    const Validar = () => {
        if (email == "" || password == ""){
            alert("No se ha introducido un usuario o contraseña")
        }else
    fetch(`http://localhost:3000/usuario/email/${email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if (data.length == 0){
            console.log("El usuario no existe")
            setContraseñaIncorrecta(true)
            console.log(contraseñaIncorrecta)
        }else
        if(data[0].Contraseña == password){
            console.log("Contraseña correcta")
            windows.location.href = "/"
        }else{
            console.log("Contraseña incorrecta")
            setContraseñaIncorrecta(true)
        }
    });
    }
    return (
        <>
        <img src={logo} className="logo" alt="logo" />
        <div className="formulario">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Introduce tu correo electrónico" autoComplete="off" onChange={handleEmailChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Introduce tu contraseña" onChange={handlePasswordChange} />
                </Form.Group>
            </Form>
            {contraseñaIncorrecta && (
            <h1>sos</h1>
            )}
            <div className="boton">
                <Button variant="success" size="lg" onClick={Validar}>Iniciar Sesion</Button>
                <h6><Link to="/recuperarcontraseña" style={{ color: '#000000' }}>Olvidaste tu contraseña?</Link></h6>
            </div>
        </div>
        </>
    )
}