import jwt from "jsonwebtoken"


export default {
	sign : (data)=> {
		return jwt.sign(data,"SECRET_KEY")
	},
	verify : (token,res)=> {
		try{
			return jwt.verify(token,"SECRET_KEY")

		}catch(error){
			res.send("invalit token!")
		}
	}

}