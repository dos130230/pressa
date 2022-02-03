
const GET = async (req,res,next)=> {
	try{
		
		let response = await req.fetch(
			`
			with my_del_post as (select
				p.post_id
				from posters as p
				where
				now() >= p.start_data
			),
			post as (
			DELETE FROM posters
			WHERE post_id= ANY(select post_id from my_del_post))

			DELETE FROM users
			WHERE user_id = ANY(select post_id from my_del_post)
			;
			`
			)

		return res.status(200).json({
			message : "REFRESH DELETE"
		})

	}catch(error){
		return next(error)
	}
}

export default {
	GET
}