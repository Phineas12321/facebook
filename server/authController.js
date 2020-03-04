const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {email, password, first_name, last_name} = req.body
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([email])
        user = user[0]
        if (user) {
            return res.status(400).send('email already registered')
        }

        const salt = bcrypt.genSaltSync(4)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register({hash, email, first_name, last_name})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([email])
        user = user[0]
        if (!user) {
            return res.status(400).send('wrong email')
        }

        const authenticated = bcrypt.compareSync(password, user.password)
        if (authenticated) {
            delete user.password
            session.user = user
            res.status(202).send(session.user)
        }else{
            res.status(401).send('wrong password')
        }
    },

    getUser: (req, res) => {
        if (req.session.user){
            res.status(20).send(req.session.user)
        }else{
            res.sendStatus(200)
        }
    }
}