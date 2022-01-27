import jwt from "jsonwebtoken"


export default {
	sign : (data)=> {
		return jwt.sign(data,"SECRET_KEY")
	},
	verify : (token)=> {
		return jwt.verify(token,"SECRET_KEY")
	}

}