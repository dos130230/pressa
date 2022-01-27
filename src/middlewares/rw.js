import fs from "fs"
import path from "path"


export default function readwrite (req,res,next){
	try {
		req.select = (fileName) => {
			let file = fs.readFileSync(path.join(process.cwd(),"src","database",fileName+".json"),"utf8")
			file = file ? JSON.parse(file) : []
			return file
		}

		req.insert = (fileName,data) => {
			let file = fs.writeFileSync(path.join(process.cwd(),"src","database",fileName+".json"),JSON.stringify(data,null,4))
			return file
		}

		return next()

	}catch(error){
		console.log(error)
	}
}