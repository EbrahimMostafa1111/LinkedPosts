import express, { json } from 'express'
import { dbConnection } from './dbConnection.js'
import userRouter from './modules/users/users.routes.js'
import postRouter from './modules/posts/posts.routes.js'
import cors from "cors"
const app = express()
const port = process.env.port || 3000

app.use(express.json())
app.use(cors())
app.use('/auth', userRouter)
app.use('/posts', postRouter)

app.get('/', (req, res) => {
    res.json({ message: 'hello world' })
})


app.listen(port, () => console.log(`app listening on port ${port}!`))