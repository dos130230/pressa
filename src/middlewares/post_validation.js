import {ServerError,ClentError} from '../utils/erorHandling.js'

const myLength = (data,name,max) => {

	if(!data) throw new ClentError(400,`${name} is required!`)
	if(data.length<3 || data.length>max) throw new ClentError(413,`${name} length min 3 max 50 simbol!`) 	
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
		if(!user_phone) throw new ClentError(400,"contact is required!")
		if(!(/^998[389][012345789][0-9]{7}$/).test(user_phone)) throw new ClentError(400,"invalit contact number!")

		// post_theme validate
		myLength(post_thema,"theme",100)

		// post_theme validate
		myLength(post_thema,"small_comment",100)


		//more text validate
		myLength(post_more,"more_comment",1200)

		//type validate
		if(!type) throw new ClentError(400,"type is required!")
		if(!['1','2'].includes(type)) throw new ClentError(400,"type onl 1 and 2 required!")


		// data validate
		if(!start_data) throw new ClentError(400,"date and time required!")	
		if(!(/[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]/).test(start_data)){ 
		// yil-oy-kun 12:34
			throw new ClentError(400,"invalit data or time!")
		}

		//catigora validate
		myLength(catigories,"categories",50)

		//subcatigories validate
		myLength(subcatigories,"subcatigories",50)

		// metting place validate
		if(!meeting_place) throw new ClentError(400,"link is required!")
		if(!(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).test(meeting_place)){
			throw new Error("invalit link or location!")
		}

		// file validate
		let {originalname,mimetype,buffer,size} = req.file
		if(!req.file) throw new ClentError(400,"file is required!")
		if((size/1024**2 | 0) >10) throw new ClentError(413,"file size max 10 MB")
		if(!["image/jpg","image/png","image/jpeg"].includes(mimetype)) throw new ClentError(415,"file type jpg or png only required!")
	
		
		return next()

	}catch(error){
		return next(error)
	}
}

export default PosterValidate


