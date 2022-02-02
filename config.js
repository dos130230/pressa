const PORT = process.env.PORT || 5000

const PAGINATION = {
	page : 1,
	limit : 6
}

const POOL = {
    connectionString : "postgres://gomjverr:c0aXJeJFFJBcZu60BjozWH-xwoi-8dRL@john.db.elephantsql.com/gomjverr"
}
export default {
	PORT,
	PAGINATION,
	POOL
}