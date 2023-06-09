import express from "express";
import LocalService from './src/models/Local'
const svcLocal=new LocalService();

const app =express();
const port=3000;

app.get('/', (req,res)=>{
    res.send('Student Bites');
})
