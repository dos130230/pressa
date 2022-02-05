import jwt from "../utils/jwt.js"
import config from "../../config.js"

const GET = async (req,res,next) => {
	try {
		let {post_id} = req.params
		let {search,type,catigor,page=config.PAGINATION.page,limit=config.PAGINATION.limit} = req.query
		let response = await req.fetch(
			`
			SELECT 
				u.*,
				p.*,
				to_char(p.start_data, 'YYYY-MM-DD hh:mm:ss') as start_data
			FROM posters as p
			left join users as u on u.user_id = p.user_id
			where p.is_accept = true and
				case
					when $1 > 0 then p.post_id = $1 
					else true
				end and
				case
					when length($2) > 0 then u.user_name ilike concat('%', $2, '%')
					else true
				end and
				case
					when ($3 = 1 or $3 = 2 ) then  p.type = $3
					else true
				end and
				case
					when length($4) > 0  then p.post_subcat = $4
					else true
				end
			order by p.start_data desc
			offset $5 limit $6;
			`,post_id,search,type,catigor,(page - 1) * limit, limit)

		if( response && response.length == 1 && post_id && response[0].post_id==post_id) {

			let id = (response[0].post_id)
		     await req.fetch(`update posters set post_views=post_views+1 where post_id =$1`,+id)
		}

		return res.json(response)
		
	}catch(error){
		return next(error)	
	}
}


const ADMIN = async (req,res,next) => {
	try{
		let {post_id} = req.params
		let response = await req.fetch(
			`
			SELECT 
				u.*,
				p.*,
				to_char(p.start_data, 'YYYY-MM-DD hh:mm:ss') as start_data
			FROM posters as p
			left join users as u on u.user_id = p.user_id
			where p.is_accept = false and
				case
					when $1 > 0 then p.post_id = $1 
					else true
				end
			order by p.post_id asc;
			`,post_id)
		res.json(response)
	}catch(error){
		return next(error)
	}
}

export default {
	GET,
	ADMIN
}

