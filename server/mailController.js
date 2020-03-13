require('dotenv').config()
const nodemailer = require('nodemailer')
const {PASS} = process.env

const sendEmail = (req, res) => {
    console.log(req.body)
    const {email} = req.body

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'fborwhatever@gmail.com',
        pass: PASS
    }
})

let mailOptions = {
    from: 'fborwhatever@gmail.com',
    to: email,
    subject: 'Welcome Or Whatever',
    text: 'Thank you for visiting our site!  Please consider visiting us again soon'
}

transporter.sendMail(mailOptions, (err, data) => {
    if(err){
        res.status(409).send(`error or whatever${err}`)
    }else{
        res.status(200).send('email sent')
    }
})
}

module.exports = {
    sendEmail
}