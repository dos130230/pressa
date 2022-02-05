import express from "express"
import config from "../config.js"
import path from "path"
import fs from "fs"
import cors from "cors"

import {ServerError,ClentError} from './utils/erorHandling.js'
import timeConverter from './utils/dataConvert.js'

const app = express()

app.use(express.json())
app.use(cors())

// static images file
app.use(express.static(path.join(process.cwd(),"files")))

//loading middlewares postgers 
import module from "./middlewares/postgres.js"
// console.log(module)
app.use(module)




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


// error handling 
app.use( (error,req,res,next) => {
<<<<<<< HEAD
	console.log(error)
=======
	
	res.send(error)
>>>>>>> 5d11c2dc45f2bb7e56e00e1c1834c53e7c482100
	if([400,401,403,404,409,413,415].includes(error.status)) return res.status(error.status).send(error)

		fs.appendFileSync(
			path.join(process.cwd(), 'log.txt'),
			`${timeConverter(new Date())}  ${req.method}  ${req.url}  "${error.message}"\n`
			)

	return res.status(500).send(new ServerError(""))
})


app.listen(config.PORT, ()=> console.log("Server is running http://localhost:"+config.PORT))

