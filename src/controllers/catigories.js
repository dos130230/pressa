const GET = (req,res,next)=> {
	try{
		let catigor = req.select("categories")
		let subcatigor = req.select("subcategories")
		for(let cat  of catigor){
			let arr = []
			for (let sub of subcatigor){
				if(cat.cat_id == sub.cat_id) arr.push(sub.subcat_name)
			}
			cat.subcatigor = arr
		}

		res.json(catigor)

	}catch(error){
		console.log(error)
	}
}

export default {
	GET
}