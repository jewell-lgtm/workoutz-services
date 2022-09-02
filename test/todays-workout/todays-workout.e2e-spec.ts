import { INestApplication } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"
import * as request from "supertest"
import { AppModule } from "@/app.module"

describe("Getting today's workouts", () => {
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

	it("can get today's workouts", async () => {
		const response = await request(app.getHttpServer())
			.post("/graphql")
			.send({
				query: `
{
  todaysWorkout(today: Wednesday) {
  __typename
    today
    difficulties {
      __typename
      id
      description
      exerciseFamily
      level
      name
      targetReps
    }
    lastCompletedSets
  }
}

				`,
			})
			.expect(200)
		expect(response.body).toMatchInlineSnapshot(`
		Object {
		  "data": Object {
		    "todaysWorkout": Object {
		      "__typename": "TodaysWorkout",
		      "difficulties": Array [
		        Object {
		          "__typename": "Difficulty",
		          "description": "Bridge",
		          "exerciseFamily": "bridge",
		          "id": "bridge1",
		          "level": 1,
		          "name": "Bridge",
		          "targetReps": 10,
		        },
		        Object {
		          "__typename": "Difficulty",
		          "description": "Twist",
		          "exerciseFamily": "twist",
		          "id": "twist1",
		          "level": 1,
		          "name": "Easy Twist",
		          "targetReps": 10,
		        },
		      ],
		      "lastCompletedSets": Array [
		        Array [
		          "bridge1",
		          "0",
		        ],
		        Array [
		          "twist1",
		          "0",
		        ],
		      ],
		      "today": "Wednesday",
		    },
		  },
		}
	`)
	})
})
