import express from "express"
import config from "../config.js"

const app = express()

//loading middlewares
import middleware from "./middlewares/rw.js"
app.use(middleware)


//loading routers
import usersRouter from "./routers/cards.js"
app.use ("/cards",usersRouter)





app.listen(config.PORT, ()=> console.log("Server is running http://localhost:"+config.PORT))

console.log(config)