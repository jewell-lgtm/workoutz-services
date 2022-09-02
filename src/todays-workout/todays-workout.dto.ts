import { Field, ObjectType, Int } from "@nestjs/graphql"
import { Difficulty } from "@/exercise/difficulty.dto"
import { Weekday } from "./weekday.dto"

@ObjectType()
export class TodaysWorkout {
	@Field(() => Weekday)
	today: Weekday

	@Field(() => [Difficulty])
	difficulties: Difficulty[]

	@Field(() => [[String, Int]])
	lastCompletedSets: [string, number][]
}
