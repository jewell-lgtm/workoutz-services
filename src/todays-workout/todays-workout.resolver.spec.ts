import { Test, TestingModule } from "@nestjs/testing"
import { ExerciseFamily } from "@/exercise/exercise-family.dto"
import { Weekday } from "@/todays-workout/weekday.dto"
import { TodaysWorkoutResolver } from "./todays-workout.resolver"

describe("TodaysWorkoutResolver", () => {
	let resolver: TodaysWorkoutResolver

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [TodaysWorkoutResolver],
		}).compile()

		resolver = module.get<TodaysWorkoutResolver>(TodaysWorkoutResolver)
	})

	it("should be defined", () => {
		expect(resolver).toBeDefined()
	})

	it.each`
		today                | expected
		${Weekday.Monday}    | ${[ExerciseFamily.push, ExerciseFamily.legs]}
		${Weekday.Tuesday}   | ${[ExerciseFamily.pull, ExerciseFamily.squat]}
		${Weekday.Wednesday} | ${[ExerciseFamily.bridge, ExerciseFamily.twist]}
		${Weekday.Thursday}  | ${[ExerciseFamily.push, ExerciseFamily.legs]}
		${Weekday.Friday}    | ${[ExerciseFamily.pull, ExerciseFamily.squat]}
		${Weekday.Saturday}  | ${[ExerciseFamily.bridge, ExerciseFamily.twist]}
		${Weekday.Sunday}    | ${[ExerciseFamily.rest]}
	`(
		"gets workouts from the correct family: $today, $expected",
		({ today, expected }) => {
			const result = resolver.todaysWorkout(today)
			expect(result.difficulties.map((d) => d.exerciseFamily)).toEqual(expected)
		},
	)
})
