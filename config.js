const PORT = process.env.PORT || 5000

const PAGINATION = {
	page : 1,
	limit : 6
}

const POOL = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '130230',
    database: 'demo_db'
}
export default {
	PORT,
	PAGINATION,
	POOL
}