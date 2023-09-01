import 'bootstrap/dist/css/bootstrap.min.css';
import UserSlider from '../../assets/UserSlider';
import NavBarTest from '../../assets/NavBarTest';
import Bottoncambio from '../../assets/Bottoncambio';
import React, { useEffect, useState } from "react";

export default function Principal (){
    return (
        <>
            <Bottoncambio label1="Home" label2="Feed"></Bottoncambio>
            <UserSlider></UserSlider>
        </>
    )
}