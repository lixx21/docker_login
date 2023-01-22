const express = require('express')
const bodyParser = require('body-parser')
const client = require('./databasepg');
const path = require('path');
const e = require('express');
const app = express();

// create connection to database
client.connect(err => {
    if(err){
        console.log(err.message)
    } else{
        console.log("database's connection established")
    }
})

// to get user's input
// For parsing application/json
app.use(bodyParser.json());
  
// For parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set directory to views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    return res.render('login')
})

app.post('/test', (req, res) => {
    console.log(req.body);

    res.send();
})

app.post('/login', (req, res) => {
    client.query(`select * from user_login where username = '${req.body.username}'`, (err, result) => {
        if(err){
            console.log(err.message)
        }else{
            pass = result.rows[0].user_password
            if (pass == req.body.password){
                return res.render('success')
            }
            // res.send(result.rows)
            // const user = result.rows
            // // console.log(typeof username)
            // var username = req.body.username;
            // var password = req.body.password;
            // // var form = username, password
            // var sql_result = result.rows[0].username;
            // console.log(sql_result)
            
            // if (username == sql_result){
            //     console.log('success')
            // }else{
            //     console.log('error')
            // }

            // return res.render('success')
            // console.log(Object.values(username))
        }   
    })
})

app.get('/register', (req, res) => {
    return res.render('register')
})

app.post('/signup', (req, res) => {
    //client.query(`INSERT INTO user_login (username, user_password) Values ('${req.body.username}', '${req.body.password}')`, (err, result2) =>{
    client.query(`INSERT INTO user_login (username, user_password) Values ('${req.body.username}', '${req.body.password}')`, (err, result) => {
        if(err){
            console.log(err.message)
        }else{
            return res.render('success')
        }
    })
})
    

app.listen(3100, () => {
    console.log('listening on 3100')
})  