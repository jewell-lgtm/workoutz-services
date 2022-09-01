import { Test, TestingModule } from "@nestjs/testing"
import { MotivationsResolver } from "./motivations.resolver"

describe("MotivationsResolver", () => {
	let resolver: MotivationsResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [MotivationsResolver],
		}).compile()

		resolver = module.get<MotivationsResolver>(MotivationsResolver)
	})

	it("should be defined", () => {
		expect(resolver).toBeDefined()
	})

	it("Should give me some motivation", () => {
		const result = resolver.todaysMotivation()
		expect(result.shouldIWorkOutToday).toBe(true)
	})
})
