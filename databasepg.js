const {Client} = require('pg')

const client = new Client({
    // host: 'docker_login_db_1', // for docker
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: '123456',
    database: 'postgres'
})

module.exports = client
