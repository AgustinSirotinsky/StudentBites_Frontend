import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//Context
import { UserContext } from '../components/context/userContext';

import Ja from './Ja.jpg';
import './Pfpage.css'; // Archivo CSS para los estilos personalizados

export default function ProfileAspects() {
    // Suponiendo que tienes estos valores para los contadores
    const likesCount = 100;
    const followersCount = 500;
    const reviewsCount = 20;
    const { user } = React.useContext(UserContext);

    return (
        <Container className="profile-container">
            <div className="profile-picture">
                <img src={Ja} alt="Profile" className="rounded-circle" />
                <p className="username">{user.Usuario}</p>
            </div>
            <div className="profile-stats">
                <p>Me gusta: {likesCount}</p>
                <p>Seguidores: {followersCount}</p>
                <p>Reseñas: {reviewsCount}</p>
            </div>
        </Container>
    );
}
