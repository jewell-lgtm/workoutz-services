/* eslint-disable unicorn/prefer-module */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Client } = require("pg")

let opts = {
	host: process.env.POSTGRES_HOST,
	port: process.env.POSTGRES_PORT,
	user: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
}
console.log("Conencting to database with", { opts })
const pgclient = new Client(opts)

pgclient.connect()

pgclient.query(
	`SELECT *
   FROM information_schema.tables`,
	undefined,
	(err, res) => {
		if (err) throw err
		console.log(err, res.rows) // Print the data in student table
		pgclient.end()
	},
)
