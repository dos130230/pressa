const GET = (req,res,next)=> {
	try{
		let invalitUser = []	
		let valitUser = []	
		let users = req.select("users")
		let posts = req.select("posters")

		let newPost = posts.filter( post => {
			if(new Date(post.start_data).getTime() > new Date().getTime()) {
				valitUser.push(post.user_id)
				return true
			}
				else {
					invalitUser.push(post.user_id)
					return false
				}
		})

		let deletUserArr = []
		for(let i of invalitUser){
			if(!valitUser.includes(i))  deletUserArr.push(i)
		}

		let newUsers = users.filter( user => (!deletUserArr.includes(user.user_id)) ) 

		req.insert("posters",newPost)
		req.insert("users",newUsers)

		res.status(200).json({
			message : deletUserArr.length+""
		})

	}catch(error){
		console.log(error)
	}
}

export default {
	GET
}