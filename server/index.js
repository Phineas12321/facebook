require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const authCtrl = require('./authController')
const mailCtrl = require('./mailController')
const ctrl = require('./controller')
const checkUser = require('./middleware/checkUser')
const   {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        rejectUnauthorized: false,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7},
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
    console.log('database connected!')
}) 



app.post('/api/register', checkUser, authCtrl.register)
app.post('/api/login', checkUser, authCtrl.login)
app.post('/api/logout', authCtrl.logout)
app.get('/api/user', checkUser)

app.post('/api/email', mailCtrl.sendEmail)

app.post('/api/posts', ctrl.createPost )
app.get('/api/posts', ctrl.getPosts)
app.put('/api/posts/:id', ctrl.editPost)
app.delete('/api/posts/:id', ctrl.deletePost)

app.listen(SERVER_PORT, ()=>console.log(`running on port ${SERVER_PORT}`))