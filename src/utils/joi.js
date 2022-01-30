import Joi  from 'joi'


const schema = Joi.object({
    user_name: Joi.string()
        .min(3)
        .max(50)
        .required(),

    user_fname:Joi.string()
        .min(3)
        .max(50)
        .required(),

    user_phone: Joi.string()
        .pattern(new RegExp(/^998[389][012345789][0-9]{7}$/))
        .required(),

    post_thema:Joi.string()
        .min(3)
        .max(50)
        .required(),
    post_comment : Joi.string()
        .min(3)
        .max(100)
        .required(),
    post_more : Joi.string()
    	.min(3)
    	.max(1000)
    	.required(),
    start_data : Joi.string()
    	.pattern(new RegExp(/^([2][0]\d{2}\/([0]\d|[1][0-2])\/([0-2]\d|[3][0-1]))$|^([2][0]\d{2}\/([0]\d|[1][0-2])\/([0-2]\d|[3][0-1])\s([0-1]\d|[2][0-3])\:[0-5]\d\:[0-5]\d)$/))
    	.label("Your error message in here"),

    catigories : Joi.string()
    	.min(2)
    	.max(20).required(),

    subcatigories :  Joi.string()
    	.min(3)
    	.max(20).required(),
    

    meeting_place: Joi.string()
        .pattern(new RegExp(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/))
})


console.log(schema.validate({
 user_name :"Dostonbek",
 user_fname :"Uktamov",
 user_phone:"998901328277",
 post_thema : "Menging yangi mavzuim!",
 post_comment : `First, a schema is constructed using the provided types and constraints:`,
 post_more :`Note that joi schema objects are immutable which means every additional rule added (e.g. .min(5)) will return a new schema object`,
 start_data :"2008/10/551 12:25:45",
 catigories : "IT",
 subcatigories : "Bacend",
 meeting_place : `https://stackoverflow.com/questions/37732/what-is-the-regex-pattern-for-datetime-2008-09-01-123545`
}))

