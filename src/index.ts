import routes from "./routes"
import Database from "./db"
import express from "express"
import bodyParser from "body-parser"
import { env, loadEnv } from "./env"

const app = express()

new Database()
loadEnv()

app.use(bodyParser({extended: false}))
app.use('/user', routes)


app.listen(4500, ()=>{
    console.log("server start");
})