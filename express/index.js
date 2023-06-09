import express from "express";
import LocalService from './src/services/local-services.js'
import Local from './src/models/Local.js'
const svcLocal=new LocalService();
const id=0;

const app= express();
const port= 3000;

app.get('/', (req,res)=>{
    res.send('StudentBites');
})

app.listen(port,()=> {
    console.log(`Pagina abierte en el puerto ${port}`)
})

app.get('/locales',async (req,res) =>{
    const LocalesGetAll = await svcLocal.getAll();
    return res.status(200).json(LocalesGetAll)
})

app.get(`$/locales/getById`,async (req,res) =>{
    const LocalesGetById = await svcLocal.getById(1);
    return res.status(200).json(LocalesGetById)
})
