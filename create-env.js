import { writeFileSync } from "node:fs"

function env(key) {
	const result = process.env[key]
	if (!result) {
		throw new Error(`Required env variable ${key} is not set`)
	}
	return result
}

writeFileSync(
	".env",
	`POSTGRES_HOST=${env("POSTGRES_HOST")}
POSTGRES_USER=${env("POSTGRES_USER")}
POSTGRES_PASSWORD=${env("POSTGRES_PASSWORD")}
POSTGRES_DATABASE=${env("POSTGRES_DATABASE")}
POSTGRES_PORT=${env("POSTGRES_PORT")}
`,
)
