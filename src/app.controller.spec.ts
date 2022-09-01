import { Test, TestingModule } from "@nestjs/testing"
import * as tk from "timekeeper"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

describe("AppController", () => {
	let appController: AppController

	beforeEach(async () => {
		const app: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService],
		}).compile()

		appController = app.get<AppController>(AppController)
	})
	afterEach(() => {
		tk.reset()
	})

	describe("root", () => {
		it.each`
			hours | greeting
			${0}  | ${"Good Night!"}
			${1}  | ${"Good Night!"}
			${2}  | ${"Good Night!"}
			${3}  | ${"Good Night!"}
			${4}  | ${"Good Night!"}
			${5}  | ${"Good Morning!"}
			${6}  | ${"Good Morning!"}
			${7}  | ${"Good Morning!"}
			${8}  | ${"Good Morning!"}
			${9}  | ${"Good Morning!"}
			${10} | ${"Good Morning!"}
			${11} | ${"Good Morning!"}
			${12} | ${"Good Afternoon!"}
			${13} | ${"Good Afternoon!"}
			${14} | ${"Good Afternoon!"}
			${15} | ${"Good Afternoon!"}
			${16} | ${"Good Afternoon!"}
			${17} | ${"Good Afternoon!"}
			${18} | ${"Good Evening!"}
			${19} | ${"Good Evening!"}
			${20} | ${"Good Evening!"}
			${21} | ${"Good Evening!"}
			${22} | ${"Good Evening!"}
			${23} | ${"Good Night!"}
		`("returns $greeting at $hours", ({ hours, greeting }) => {
			const hh = hours.toString().padStart(2, "0")
			const time = new Date(`2022-01-01T${hh}:00:00.000Z`)
			tk.freeze(time)
			expect(appController.getHello()).toBe(greeting)
		})
	})
})
