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