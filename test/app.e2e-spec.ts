import { INestApplication } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"
import * as request from "supertest"
// noinspection ES6PreferShortImport
import { AppModule } from "../src/app.module"

describe("AppController (e2e)", () => {
	let app: INestApplication

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile()

		app = moduleFixture.createNestApplication()
		await app.init()
	})

	afterAll(async () => {
		await app.close()
	})

	it("/ (GET)", async () => {
		const response = await request(app.getHttpServer()).get("/").expect(200)
		expect(response.text).toMatch(/Good (Morning|Afternoon|Evening|Night)!/)
	})
})
