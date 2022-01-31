import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export default {
	sign : (data)=> {
		return jwt.sign(data,TOKEN_KEY)
	},
	verify : (token,res)=> {
		try{
			return jwt.verify(token,TOKEN_KEY)

		}catch(error){
			res.send("invalit token!")
		}
	}

}