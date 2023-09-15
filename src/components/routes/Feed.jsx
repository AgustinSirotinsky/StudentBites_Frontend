import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import Bottoncambio from '../../assets/Bottoncambio';
import FeedReseña from '../../assets/FeedReseña';

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
            <FeedReseña></FeedReseña>
        </>
    )
}