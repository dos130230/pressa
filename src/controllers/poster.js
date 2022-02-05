import path from "path"
import fs from "fs"
import {ServerError,ClentError} from '../utils/erorHandling.js'


const POST = async (req,res,next) => {
	try{
		let {originalname,mimetype,buffer,size} = req.file
		let {user_name, user_fname,user_job,user_phone, post_thema, post_comment,type, post_more, start_data, catigories, subcatigories, meeting_place} = req.body

		let fileName = Date.now() + originalname.replace(/\s/g,"")
		let filePaht = path.join(process.cwd(),"files","images",fileName)

		fs.writeFileSync(filePaht,buffer)
		const {max} = (await req.fetch("select max(user_id) from users"))[0]
		
		await req.fetch(`
				insert into users (user_name, user_fname, user_job, user_phone) values ($1,$2,$3,$4);
			`,user_name, user_fname, user_job, user_phone)

	
		await req.fetch(`
				insert into posters (post_thema, post_comment, post_more, post_views, post_img,type, meeting_place, start_data, is_accept, user_id,post_subcat)
					values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11);
		`,post_thema , post_comment , post_more , 0 , '/images/'+fileName , type , meeting_place , start_data ,1, +max+1,subcatigories)

		return res.json({

			message:"Post send!"
		})

		}catch(error){
			console.log(error)
			return next(error)
	}
}


const PUT = async (req,res,next) => {
	try{
		let {post_id} = req.body
		if(!post_id) throw new ClentError(400,"post_id is required!")
		let response = await req.fetch('update posters as p set is_accept = 2 where p.post_id = $1',post_id)
		
		return res.status(200).json({
			message : "Qabul qilindi!"
		})

	}catch(error){
		return next(error)
	}
}

const DELETE = async (req,res,next) => {
	try{
		let {post_id} = req.body
		if(!post_id) throw new ClentError(400,"post_id is required!")
		let response = await req.fetch('update posters as p set is_accept = 3 where p.post_id = $1',post_id)
		
		return res.status(200).json({
			message : "Bekor qilindi!"
		})

	}catch(error){
		return next(error)
	}
}


export default {
	POST,
	PUT,
	DELETE
}