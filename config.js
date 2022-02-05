const PORT = process.env.PORT || 5000

const PAGINATION = {
	page : 1,
	limit : 6
}

const POOL = {
    connectionString : "postgres://fpucukvo:H4KyT8T4x6Eu4YqoaSEUAixmnIhIyOCp@john.db.elephantsql.com/fpucukvo"
}


// const POOL = {
// 	host: 'localhost',
//     user: 'postgres',
//     password: '130230',
//     database: 'demo_db',
// }

export default {
	PORT,
	PAGINATION,
	POOL
}