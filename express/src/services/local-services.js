import config from '../../dbconfig-env.js';
import sql from 'mssql'
class LocalService {

getAll = async () => {
    let returnArray = null;
    console.log('Estoy en LocalService.getAll()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT * FROM Local");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }


getById = async (id) => {
    let returnEntity=null;
    console.log('Estoy en LocalService.getById()');
    try {
        let pool=await sql.connect(config);
        let result = await pool.request()
            .input('pId', sql.Int, id)
            .query('SELECT * FROM Local WHERE id = @pId');
        returnEntity = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnEntity;
}

getTitle = async () => {
    let returnArray = null;
    console.log('Estoy en LocalService.getTitle()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT Nombre FROM Local");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }

getImage = async () => {
    let returnArray = null;
    console.log('Estoy en LocalService.getImage()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT Portada FROM Local");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }

getStars = async () => {
    let returnArray = null;
    console.log('Estoy en LocalService.getStars()');
    try {
        let pool = await sql.connect(config);
       let result = await pool.request().query("SELECT Calificacion FROM Local");
       returnArray = result.recordsets[0];
    }
    catch (error){
        console.log(error)
    }
    return returnArray;
    }
}
export default LocalService