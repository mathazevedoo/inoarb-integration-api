const mysql = require('mysql2/promise')
const properties = require('./properties')

const getServerConnection = async () => await mysql.createConnection({
        host: properties.DATABASE_URL,
        user: properties.DATABASE_USER,
        password: properties.DATABASE_PSK,
        database: properties.DATABASE_NAME
    });

const executeQuery = async (query, params, callback) => await getServerConnection().then(async conn => 
    await conn.query(query, params, callback).then(res => res))

module.exports = {
    getServerConnection,
    executeQuery
}

