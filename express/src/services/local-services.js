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
}

getById = async (id) => {
    let returnArray=null;
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
    return returnArray;
}
export default LocalService