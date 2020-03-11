module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await db.get_post()
        if (posts !== []){
            res.status(200).send(posts)
        }else{
            res.sendStatus(500)
        }
    },

    createPost: (req, res) => {
        const {post_content, user_id} = req.body
        const db = req.app.get('db')
        db.create_post([user_id, post_content]).then(()=>{
            res.sendStatus(201)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },

    editPost: (req, res) => {
        const {id} = req.params
        const {post_content} = req.body
        const db = req.app.get('db')
        db.edit_post([post_content, id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(500)
        })
    },

    deletePost: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_post([id]).then(()=>{
            res.sendStatus(200)
        }).catch(()=>{
            res.sendStatus(500)
        })
    }
}