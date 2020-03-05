module.exports = {
    getPosts: async (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        const posts = await db.get_post()
        if (posts !== []){
            res.status(200).send(posts)
        }else{
            res.sendStatus(500)
        }
    },

    createPost: (req, res) => {
        const {id} = req.params
        const {post_content} = req.body
        const db = req.app.get('db')
        db.create_post([post_content]).then(()=>{
            res.sendStatus(201)
        }).catch(()=>{
            res.sendStatus(500)
        })
    }
}