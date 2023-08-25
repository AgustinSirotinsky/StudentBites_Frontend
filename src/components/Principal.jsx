import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import UserSlider from '../assets/UserSlider';
import NavBarTest from '../assets/NavBarTest';
import React, { useEffect, useState } from "react";

export default function Principal (){
    useEffect(() => {
        fetch('/locales')
        .then(res => res.json())
        .then(res => {
        })
    })
    return (
        <>
            <UserSlider></UserSlider>
        </>
    )
}