import path from "path"
import fs from "fs"



const POST = (req,res,next) => {
	try{
		let {originalname,mimetype,buffer,size} = req.file
		let {user_name, user_fname,user_job,user_phone, post_thema, post_comment,type, post_more, start_data, catigories, subcatigories, meeting_place} = req.body

		let fileName = Date.now() + originalname.replace(/\s/g,"")
		let filePaht = path.join(process.cwd(),"files","images",fileName)

		fs.writeFileSync(filePaht,buffer)
		let users = req.select("users")
		let posts = req.select("posters")

		let newUser = {
			user_id : users.length ? users[users.length-1].user_id+1 : 1,
			user_name,
			user_fname,
			user_job,
			user_phone
		}

		let newPost = {
			post_id : posts.length ? posts[posts.length-1].post_id+1 : 1,
			post_thema,
			post_comment,
			post_more,
			post_views : 0,
			post_img : "/images/"+fileName,
			type,
			meeting_place,
			start_data,
			is_accept : false,
			user_id : newUser.user_id,
		}

		posts.push(newPost)
		users.push(newUser)

		req.insert("users",users)
		req.insert("posters",posts)

		res.json({
			message:"Post send!"
		})

		

	}catch(error){
		console.log(error)
	}
}


const PUT = (req,res) => {
	try{
		let {post_id} = req.body
		
		let posts = req.select("posters")
		let found = posts.find(post => post.post_id == post_id)
		if(!found) throw new Error("invalit post_id!")
		found.is_accept = true

		req.insert("posters",posts)

		res.status(200).json({
			message : "watching post!"
		})

	}catch(error){
		console.log(error)
	}
}


const DELETE = (req,res) => {
	try{
		let {post_id} = req.body
		
		let posts = req.select("posters")
		let users = req.select("users")

		let index = posts.findIndex(post => post.post_id == post_id)
		if(index == -1) throw new Error("invalit post_id!")

		let deletPost = posts.splice(index,1)
		if(deletPost[0].is_accept) throw new Error("wrong is_accept true!")
		req.insert("posters",posts)

		res.status(200).json({
			message : "watching post!"
		})

	}catch(error){
		console.log(error)
		res.send(error.message)
	}
}
export default {
	POST,
	PUT,
	DELETE
}