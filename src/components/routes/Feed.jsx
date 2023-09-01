<<<<<<< HEAD:src/components/Feed.jsx
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Bottoncambio from '../assets/Bottoncambio';
import FeedReseña from '../assets/FeedReseña';

export default function Feed (){
    return (
        <div>
        <Bottoncambio label1="Home" label2="Feed"></Bottoncambio>
        <FeedReseña></FeedReseña>
        </div>
    )
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import NavBarTest from '../../assets/NavBarTest';
import Bottoncambio from '../../assets/Bottoncambio';

export default function Feed (){
    useEffect(() => {
        fetch('/Reseña')
        .then(res => res.json())
        .then(res => {
        })
    })
    return (
        <>
            <NavBarTest></NavBarTest>
            <Bottoncambio label1="Home" label2="Feed"></Bottoncambio>
        </>
    )
>>>>>>> 199c299e2b8c0fe63d2d7d401b61dacd03751e7e:src/components/routes/Feed.jsx
}