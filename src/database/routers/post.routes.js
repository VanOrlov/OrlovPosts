const Router = require('express')
const router = new Router()
const postController = require('../controllers/post.controller')

router.post('/posts', postController.createPost)
router.get('/posts', postController.getPosts)
router.delete('/posts/:id', postController.deletePost)
router.get('/postsUser/:user_id', postController.getUserIdPost)


module.exports = router