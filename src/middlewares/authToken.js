import jwt from "../utils/jwt.js"
import {ServerError,ClentError} from '../utils/erorHandling.js'

const authToken = (req,res,next) => {
	try{
		let token  = req.headers.token
		if(!token) throw new ClentError(400,"token is required!")
		jwt.verify(token,res)

	return next()
	}catch(error){
		res.send(error.message)
	}
}

export default  authToken
