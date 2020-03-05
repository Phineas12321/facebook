require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authController')
const ctrl = require('./controller')
const   {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: {maxAge: 1000 * 60 *60 *24},
        secret: SESSION_SECRET
    })
)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=>console.log(`running on port ${SERVER_PORT}`))
}) 

app.post('/api/register', authCtrl.register)
app.post('/api/login', authCtrl.login)

app.post('/api/posts', ctrl.createPost )
app.get('/api/posts', ctrl.getPosts)