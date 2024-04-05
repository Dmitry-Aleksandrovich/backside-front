import routes from "./routes"
import Database from "./db"
import express from "express"

const app = express()

new Database()

app.use('/user', routes)



app.listen(4500, ()=>{
    console.log("server start");
})