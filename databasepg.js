// const {Client} = require('pg')

// const client = new Client({
//     // host: 'docker_login_db_1', // for docker
//     // host: 'localhost',
//     // user: 'postgres',
//     // port: 5432,
//     // password: '123456',
//     // database: 'postgres'

//     // use postgres production in railway
// });

const { Client } = require("pg");

const connectionString =
  "postgresql://postgres:JAnsITlNkokTasO8fzkQ@containers-us-west-155.railway.app:7049/railway";

const client = new Client({
  connectionString,
});

module.exports = client
