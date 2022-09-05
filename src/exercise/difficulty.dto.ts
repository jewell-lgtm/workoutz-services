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

	constructor(
		id: string,
		name: string,
		description: string,
		targetReps: number,
		exerciseFamily: ExerciseFamily,
		level: number,
	) {
		this.id = id
		this.name = name
		this.description = description
		this.targetReps = targetReps
		this.exerciseFamily = exerciseFamily
		this.level = level
	}
}
