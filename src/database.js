import mysql from "mysql2/promise"

import { config } from "./config"//
export const connect = async() =>{
    return await mysql.createConnection(config);

    //hacer consulta en la base de datos
    // se necesita que se conecte a la base de datos y
    // luego hace una promesa con la condicion que queremos que busque
    // en la base de datos.
    //const conn = await mysql.createConnection(config);
    //const [rows] = await conn.query("SELECT 1 + 1");
    //console.log(rows)
}

//para que se ejecute la constante
//connect();