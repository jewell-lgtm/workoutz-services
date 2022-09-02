import { registerEnumType } from "@nestjs/graphql"

export enum ExerciseFamily {
	"push" = "push",
	"legs" = "legs",
	"pull" = "pull",
	"squat" = "squat",
	"bridge" = "bridge",
	"twist" = "twist",
	"rest" = "rest",
}

registerEnumType(ExerciseFamily, { name: "ExerciseFamily" })
