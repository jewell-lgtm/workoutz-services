/* eslint-disable unicorn/no-process-exit,unicorn/prefer-top-level-await */
import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	await app.listen(process.env.PORT ?? 3030)
}

bootstrap().catch((error) => {
	console.error(error)
	process.exit(1)
})
