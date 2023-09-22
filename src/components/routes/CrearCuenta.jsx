//React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//Other
import '../../assets/IniciarSesion.css'
import logo from '../../assets/logo.png'


export default function CrearCuenta() {

    //Todos los tipos de errores para que el usuario sepa cual es el error
    const [camposVacios, setCamposVacios] = useState(false);
    const [emailIncorrecto, setEmailIncorrecto] = useState(false);
    const [passwordsNoCoinciden, setPasswordsNoCoinciden] = useState(false);
    const [usuarioYaExiste, setUsuarioYaExiste] = useState(false);
    const [emailYaRegistrado, setemailYaRegistrado] = useState(false);

    const Validar = () => {
        setCamposVacios(false)
        setEmailIncorrecto(false)
        setPasswordsNoCoinciden(false)
        setUsuarioYaExiste(false)
        setemailYaRegistrado(false)
        if (email == "" || password == "" || passwordConfirmation == "" || usuario == "") {
            setCamposVacios(true)
        }
        else if (password != passwordConfirmation) {
            setPasswordsNoCoinciden(true)
        }
        else if (/\S+@\S+\.\S+/.test(email) == false) {
            setEmailIncorrecto(true)
            console.log('email incorrecto')
        }
        else
        {
        fetch(`http://localhost:3000/usuario/email/${email}`)
            .then(res => res.json())
            .then(data => {
            console.log(data)
            if (data.length !== 0) {
                console.log("El email ya existe")
                setemailYaRegistrado(true)
            } 
            //Agregar usuario ya regsitrado
            else {
                fetch('http://localhost:3000/usuario/insert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "Email": email,
                    "Usuario": usuario,
                    "Contraseña": password,
                    "Foto": 'default.jpg',
                })
            })
            .then (res=>res.json())
            .then(data => {
                console.log(data);
                console.log("Usuario creado");
                window.location.href = "/";
            });
            }
        })
    }}


    const [usuario, setusuario] = useState("");
    const handleUsuarioChange = (e) => {
        setusuario(e.target.value);
        console.log(usuario)
    };
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
        console.log(/\S+@\S+\.\S+/.test(email))
    };
    const [password, setPassword] = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password)
    };
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
        console.log(passwordConfirmation)
    };


    return (
        <>
        <img src={logo} className="logo" alt="logo" />
        <div className="formulario">
        {camposVacios && (
                <Alert key='danger' variant='danger'>Llene todos los campos</Alert>
        )}
        {passwordsNoCoinciden && (
                <Alert key='danger' variant='danger'>Las contraseñas no coinciden</Alert>
        )}
        {emailIncorrecto && (
                <Alert key='danger' variant='danger'>Email no valido</Alert>
        )}
        {emailYaRegistrado && (
                <Alert key='danger' variant='danger'>Email ya registrado</Alert>
        )}
            <Form>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="user" placeholder="Nombre" onChange={handleUsuarioChange} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Electronico" onChange={handleEmailChange} />
                </Form.Group>
                <Form.Group controlId="formPlaintextPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" onChange={handlePasswordChange} />
                </Form.Group>
                <Form.Group controlId="formPlaintextPasswordConfirmation">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Confirmar Contraseña" onChange={handlePasswordConfirmationChange} />
                </Form.Group>
                <div className="boton">
                <Button variant="success" size="lg" onClick={Validar}>Crear Cuenta</Button>
                </div>
                </Form>
        </div>
        <div className="iniciarSesion">
        <h4 className="link">¿Ya tienes una cuenta? <Link to="/" style={{ color: '#000000' }}>Iniciar Sesion</Link></h4>
        </div>
        </>
    )
}