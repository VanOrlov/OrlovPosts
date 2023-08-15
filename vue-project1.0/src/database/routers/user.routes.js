const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')

router.post('/users', userController.createUser)
router.get('/usersLogin', userController.getUsers)
router.get('/usersLogin/:login', userController.getOneUser)
router.get('/users', userController.loginUser)
router.get('/usersId/:id', userController.getUserId)

module.exports = router