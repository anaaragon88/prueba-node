import connection from './config/db.js'
import cors from 'cors'
import express from "express"
import 'dotenv/config'

connection

const app = express();

app.use(cors())
app.use(express.json())

app.listen(8000)
console.log("server on port", 8000)