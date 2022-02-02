
const GET = async(req,res,next)=> {
	try{
		const {cat_id} = req.params
		const catigor = await req.fetch(`
			select
 			cat.*,
 			json_agg(sub.subcat_name) as subcat
 			from categories as cat 
 			left join subcategories as sub on sub.cat_id = cat.cat_id
 			where
 			case
 				when $1 > 0 then cat.cat_id = $1
 				else true	 
 			end
 			group by cat.cat_id;

		`,cat_id)

		return res.json(catigor)

	}catch(error){
		return next(error)
	}

}

export default {
	GET
}