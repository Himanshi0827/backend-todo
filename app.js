import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
import user from './routes/user.js'
import todo from './routes/todo.js'

app.use('/user', user)
app.use('/todo', todo)

// app.use(cors({
//     origin: 'https://himanshi-todoapp.netlify.app/',
// }))

export default app
