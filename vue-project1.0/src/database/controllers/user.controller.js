const db = require('../db')

class UserController{
    async createUser(req, res){
        const {name, surname, login, password, date_reg, admin} = req.body
        const newUser = await db.query('INSERT INTO users (name, surname, login, password, date_reg, admin) values ($1, $2, $3, $4, $5, $6) RETURNING *', [name, surname, login, password, date_reg, admin])
        res.json(newUser.rows)
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    async getOneUser(req, res){
        const login = req.params.login
        const user = await db.query('SELECT * FROM users where login = $1', [login])
        res.json(user.rows[0])
    }

    async loginUser(req, res){
        const users = await db.query('SELECT login, password FROM users')
        res.json(users.rows)
    }

    async getUserId(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    }
}
module.exports = new UserController()
