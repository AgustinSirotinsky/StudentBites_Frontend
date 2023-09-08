import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import Bottoncambio from '../assets/Bottoncambio';

export default function Feed (){
    useEffect(() => {
        fetch('/Reseña')
        .then(res => res.json())
        .then(res => {
        })
    })
    return (
        <>
            <Bottoncambio label1="Home" label2="Feed"></Bottoncambio>
        </>
    )
}