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
}