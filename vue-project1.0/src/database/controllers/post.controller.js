const db = require('../db')

class PostController{
    async createPost(req, res){
        const {title, content, user_id} = req.body
        const newPost = await db.query('INSERT INTO posts (title, content, user_id) values ($1, $2, $3) RETURNING *', [title, content, user_id])
        res.json(newPost.rows)
    }

    async getPosts(req, res){
        const posts = await db.query('SELECT * FROM posts')
        res.json(posts.rows)
    }

    async deletePost(req, res){
        const id = req.params.id
        const post = await db.query('DELETE FROM posts where id = $1', [id])
        res.json(post.rows[0])
    }
    
    async getUserIdPost(req, res){
        const user_id = req.params.user_id
        const post = await db.query('SELECT * FROM posts where user_id = $1', [user_id])
        res.json(post.rows)
    }
}

module.exports = new PostController()