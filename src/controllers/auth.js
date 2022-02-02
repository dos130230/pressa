import jwt from "../utils/jwt.js"
import {ServerError,ClentError} from '../utils/erorHandling.js'

const LOGIN = async (req,res,next) => {
	try{
		
		let {username, password} = req.body
		if(!username || !password) throw new ClentError(400,"username and password required!")
		if(username.length > 50 || password.length >50) throw new ClentError(400,"username and password big symbol!")

		let found = await req.fetch(`
			SELECT admin_id,admin_name
			  FROM rols
			 WHERE admin_name = $1 
			   AND admin_password = crypt($2, admin_password);

			   `,username,password)

		if(!found.length) throw new ClentError(401,"invalit username or password!")

		return res.status(201).json({
			message : "LOGIN OK",
			user: found,
			token : jwt.sign({id:found.admin_id,username : found.admin_name})
		})
	}catch(error){
		return next(error)
	}
}

export default {
	LOGIN
}