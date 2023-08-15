const express = require('express')
const cors = require('cors')
const userRouter = require('../database/routers/user.routes')
const postRouter = require('../database/routers/post.routes')

const app = express()
const PORT = 3000
const IP_ADDRESS = '192.168.1.2'

app.use(express.json())
app.use(cors())

app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, IP_ADDRESS, () => {
    console.log(`Сервер запущен на адресе http://${IP_ADDRESS}:${PORT}`)      
})    
   