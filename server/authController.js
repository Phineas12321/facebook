const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {email, password, first_name, last_name}
        const {session} = req
        const db = req.app.get('db')
        let user = await db.check_user([email])
        user = user[0]
        if (user) {
            return res.status(400).send('email already registered')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user({hash, email, first_name, last_name})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)
    }
}