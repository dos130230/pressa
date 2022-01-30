import sha256 from "sha256"
import jwt from "../utils/jwt.js"

const LOGIN = (req,res,next) => {
	try{
		let {username, password} = req.body
		if(!username || !password) throw new Error("username and password required!")

			let rols = req.select("rols")
		let found = rols.find( rol => rol.admin_name == username && rol.admin_password ==sha256(password))
		if(!found) throw new Error("invalit username or password!")
			delete found.admin_password

		res.status(201).json({
			message : "LOGIN OK",
			user: found,
			token : jwt.sign({id:found.admin_id,username : found.admin_name})
		})
	}catch(error){
		res.send(error.message)
	}
}

export default {
	LOGIN
}