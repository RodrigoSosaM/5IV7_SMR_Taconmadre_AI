const mysql = require('mysql')
const pool = mysql.createPool({
    host: process.env.BD_HOST,
    user: process.env.BD_USUARIO,
    password: process.env.BD_CONTRASEÑA,
    port: process.env.BD_PORT,
    database: process.env.BD_NOMBRE
});