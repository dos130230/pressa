 import jwt from "../utils/jwt.js"

const GET = (req,res,next) => {
	try {
		let users = req.select("users")
		let posts = req.select("posters")
		let {post_id} = req.params
		
		if(post_id){

			if (req.headers.token){
				jwt.verify(req.headers.token)

				let found = posts.find( post => post.post_id == post_id)
				if(!found) throw new Error("Not found Posts!")

				let { user_id } = found
				let foundUser = users.find( (user) => (user.user_id == user_id))
				delete found.user_id
				found.user = foundUser

				return	res.json(found)
			}

			let found = posts.find( post => post.post_id == post_id && post.is_accept)
			if(!found) throw new Error("Not found Posts!")

			let { user_id } = found
			found.post_views++
			req.insert("posters",posts)
			let foundUser = users.find( (user) => (user.user_id == user_id))
			delete found.user_id
			found.user = foundUser

			res.json(found)

		}

		let resul = posts.filter((post) => {
			let foundUser = users.find( (user) => (user.user_id == post.user_id))
			delete post.user_id

			post.user = foundUser

			// delete post.user.user_id

			return post.is_accept
		})

		res.json(resul)
		
	}catch(error){
		console.log(error)
		res.send(error.message)		
	}
}

export default {
	GET
}