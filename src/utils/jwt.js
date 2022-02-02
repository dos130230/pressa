import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default {
	sign : (data)=> {
		return jwt.sign(data,process.env.TOKEN_KEY)
	},
	verify : (token,res)=> {
		try{
			return jwt.verify(token,process.env.TOKEN_KEY)

		}catch(error){
			return res.status(401).json({status : 401,message:"invalit token!"})
		}
	}

}