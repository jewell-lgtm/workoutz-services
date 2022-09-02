import { Field, ID, Int, ObjectType } from "@nestjs/graphql"
import { ExerciseFamily } from "@/exercise/exercise-family.dto"

@ObjectType()
export class Difficulty {
	@Field(() => ID)
	id: string
	@Field()
	name: string
	@Field()
	description: string
	@Field(() => Int)
	targetReps: number
	@Field(() => ExerciseFamily)
	exerciseFamily: ExerciseFamily
	@Field(() => Int)
	level: number
}
