
const myLength = (data,name,max) => {

	if(!data) throw new Error(`${name} is required!`)
	if(data.length<3 || data.length>max) throw new Error(`${name} length min 3 max 50 simbol!`) 	
}



const fileValdate = (file) => {
	let {originalname,mimetype,buffer,size} = file

	//file valdeate 
	if(!file) throw new Error("file is required!")
	if((size/1024**2 | 0) >10) throw new Error("file size max 10 MB")
	if(!["image/jpg","image/png","image/jpeg"].includes(mimetype)) throw new Error("file type jpg or png only required!")
	
}

const PosterValidate = (req,res,next) => {
	try{
		let {user_name, user_fname,user_job,user_phone, post_thema, post_comment,type, post_more, start_data, catigories, subcatigories, meeting_place} = req.body
		// username validate
		myLength(user_name,"username",50)

		//firstname validate
		myLength(user_fname,"firstname",50)

		//userjob validate
		myLength(user_job,"user_job",50)

		//contact validate
		if(!user_phone) throw new Error("contact is required!")
		if(!(/^998[389][012345789][0-9]{7}$/).test(user_phone)) throw new Error("invalit contact number!")

		// post_theme validate
		myLength(post_thema,"theme",100)

		// post_theme validate
		myLength(post_thema,"small_comment",100)


		//more text validate
		myLength(post_more,"more_comment",1200)


		// data validate
		if(!start_data) throw new Error("date and time required!")
		if(!(/^([2][0]\d{2}\/([0]\d|[1][0-2])\/([0-2]\d|[3][0-1]))$|^([2][0]\d{2}\/([0]\d|[1][0-2])\/([0-2]\d|[3][0-1])\s([0-1]\d|[2][0-3])\:[0-5]\d\:[0-5]\d)$/).test(start_data)){
			throw new Error("invalit data or time!")
		}

		//catigora validate
		myLength(catigories,"categories",50)

		//subcatigories validate
		myLength(subcatigories,"subcatigories",50)

		// metting place validate
		if(!meeting_place) throw new Error("link is required!")
		if(!(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).test(meeting_place)){
			throw new Error("invalit link or location!")
		}

		// file validate
		fileValdate(req.file)
		
		return next()

	}catch(error){
		console.log(error)
		// res.send(error.message)
	}
}

export default PosterValidate