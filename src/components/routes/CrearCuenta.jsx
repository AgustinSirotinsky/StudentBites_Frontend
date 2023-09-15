//React
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

//Other
import '../../assets/CrearCuenta.css'
import logo from '../../assets/logo.png'


export default function CrearCuenta() {

    //Todos los tipos de errores para que el usuario sepa cual es el error
    const [camposVacios, setCamposVacios] = useState(false);
    const [emailIncorrecto, setEmailIncorrecto] = useState(false);
    const [passwordsNoCoinciden, setPasswordsNoCoinciden] = useState(false);
    const [usuarioYaExiste, setUsuarioYaExiste] = useState(false);
    const [emailYaRegistrado, setemailYaRegistrado] = useState(false);

    const Validar = () => {
        if (email == "" || password == "" || passwordConfirmation == "" || usuario == "") {
            setCamposVacios(true)
        }
        else if (password != passwordConfirmation) {
            setPasswordsNoCoinciden(true)
        }
        else if (/\S+@\S+\.\S+/.test(email) == false) {
            setEmailIncorrecto(true)
        }
        else
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
                console.log('todo chill')
            }


    const { usuario, setusuario } = useState("");
    const handleUsuarioChange = (e) => {
        setusuario(e.target.value);
    };
    const [email, setEmail] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        console.log(email)
        console.log(/\S+@\S+\.\S+/.test(email))
    };
    const { password, setPassword } = useState("");
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const { passwordConfirmation, setPasswordConfirmation } = useState("");
    const handlePasswordConfirmationChange = (e) => {
        setPasswordConfirmation(e.target.value);
    };


    return (
        <>
        <img src={logo} className="logo" alt="logo" />
        <div className="formulario">
        <Alert key='danger' variant='danger'>Contraseña o Email incorrecto</Alert>
            <Form>
                <Form.Group controlId="formBasicUser">
                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type="user" placeholder="Nombre" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control type="email" placeholder="Correo Electronico" onChange={handleEmailChange} />
                </Form.Group>
                <Form.Group controlId="formPlaintextPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group controlId="formPlaintextPasswordConfirmation">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control type="passwordConfirmation" placeholder="Confirmar Contraseña" />
                </Form.Group>
                <div className="boton">
                <Button variant="success" size="lg" onClick={Validar}>Crear Cuenta</Button>
                </div>
                </Form>
        </div>
        <div className="iniciarSesion">
        <h4>¿Ya tienes una cuenta? <Link to="/iniciarsesion" style={{ color: '#000000' }}>Iniciar Sesion</Link></h4>
        </div>
        </>
    )
}