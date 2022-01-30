import jwt from "../utils/jwt.js"

const authToken = (req,res,next) => {
	try{
		let token  = req.headers.token
		if(!token) throw new Error("token is required!")
		jwt.verify(token,res)

	return next()
	}catch(error){
		res.send(error.message)
	}
}

export default  authToken
