import express from "express"
import config from "../config.js"
import path from "path"

const app = express()

app.use(express.json())

// static images file
app.use(express.static(path.join(process.cwd(),"files")))

//loading middlewares
import middleware from "./middlewares/rw.js"
app.use(middleware)






//loading routers
import usersRouter from "./routers/cards.js"
app.use ("/cards",usersRouter)

import catigorRouter from "./routers/catigories.js"
app.use ("/catigories",catigorRouter)

import postRouter from "./routers/poster.js"
app.use ("/poster",postRouter)


import intervalRouter from "./routers/intervalDate.js"
app.use ("/intervalDate",intervalRouter)


import authRouter from "./routers/auth.js"
app.use ("/auth",authRouter)











app.listen(config.PORT, ()=> console.log("Server is running http://localhost:"+config.PORT))

console.log(config)