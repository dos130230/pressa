import jwt from "../utils/jwt.js"
import config from "../../config.js"
import {ServerError,ClentError} from '../utils/erorHandling.js'

const GET = async (req,res,next) => {
	try {
		let {post_id} = req.params
		let {data,search,type,catigor,page=config.PAGINATION.page,limit=config.PAGINATION.limit} = req.query
		if(post_id && !parseInt(post_id)) throw new ClentError(400,"invalit post_id!")
		
		let response = await req.fetch(
			`
			SELECT 
				u.*,
				p.*,
				to_char(p.start_data, 'yyyy-mm-dd | HH24:MI') as start_data
			FROM posters as p
			left join users as u on u.user_id = p.user_id
			where p.is_accept = 2 and
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
					when length($4)  > 0  then p.post_subcat = $4
					else true
				end and
				case
					when length($5) > 0 then to_char(p.start_data,'yyyy-mm-dd HH24:MI') ilike concat($5,'%')
					else true 
				end
			order by p.start_data asc
			offset $6 limit $7;
			`,post_id,search,type,catigor,data,(page - 1) * limit, limit)

		if(response.length == 1 && post_id && response[0].post_id==post_id) {

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
		if(post_id && !parseInt(post_id)) throw new ClentError(400,"invalit post_id!")
		let is_accept  = req.headers.is_accept || 1
		let response = await req.fetch(
			`
			SELECT 
				u.*,
				p.*,
				to_char(p.start_data,'yyyy-mm-dd hh24:mi:ss') as start_data
			FROM posters as p
			left join users as u on u.user_id = p.user_id
			where p.is_accept = $2 and
				case
					when $1 > 0 then p.post_id = $1 
					else true
				end
			order by p.post_id asc;
			`,post_id,is_accept)

		res.json(response)
	}catch(error){
		return next(error)
	}
}

export default {
	GET,
	ADMIN
}

