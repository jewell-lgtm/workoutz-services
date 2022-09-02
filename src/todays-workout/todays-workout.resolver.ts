import { Query, Resolver } from "@nestjs/graphql"
import { Difficulty } from "@/exercise/difficulty.dto"
import { ExerciseFamily } from "@/exercise/exercise-family.dto"
import { TodaysWorkout } from "./todays-workout.dto"
import { Weekday } from "./weekday.dto"

@Resolver()
export class TodaysWorkoutResolver {
	@Query(() => TodaysWorkout)
	todaysWorkout(today: Weekday): TodaysWorkout {
		const families = this.getFamilies(today)
		const difficulties = this.getDifficulties(families)
		const lastCompletedSets = this.getLastCompletedSets(difficulties)
		return {
			today,
			difficulties,
			lastCompletedSets,
		}
	}

	private getFamilies(today: Weekday): ExerciseFamily[] {
		switch (today) {
			case Weekday.Monday:
				return [ExerciseFamily.push, ExerciseFamily.legs]
			case Weekday.Tuesday:
				return [ExerciseFamily.pull, ExerciseFamily.squat]
			case Weekday.Wednesday:
				return [ExerciseFamily.bridge, ExerciseFamily.twist]
			case Weekday.Thursday:
				return [ExerciseFamily.push, ExerciseFamily.legs]
			case Weekday.Friday:
				return [ExerciseFamily.pull, ExerciseFamily.squat]
			case Weekday.Saturday:
				return [ExerciseFamily.bridge, ExerciseFamily.twist]
			case Weekday.Sunday:
				return [ExerciseFamily.rest]
		}
	}

	private difficultiesValues: Record<ExerciseFamily, Difficulty> = {
		[ExerciseFamily.bridge]: {
			id: "bridge1",
			name: "Bridge",
			description: "Bridge",
			exerciseFamily: ExerciseFamily.bridge,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.legs]: {
			id: "legs1",
			name: "Easy Leg Raises",
			description: "Legs",
			exerciseFamily: ExerciseFamily.legs,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.push]: {
			id: "push1",
			name: "Wall Pushups",
			description: "Pushups against a wall",
			exerciseFamily: ExerciseFamily.push,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.pull]: {
			id: "pull1",
			name: "Wall Pullups",
			description: "Pullups against a wall",
			exerciseFamily: ExerciseFamily.pull,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.squat]: {
			id: "squat1",
			name: "Jackknife Squats",
			description: "Squats in a jackknife position",
			exerciseFamily: ExerciseFamily.squat,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.twist]: {
			id: "twist1",
			name: "Easy Twist",
			description: "Twist",
			exerciseFamily: ExerciseFamily.twist,
			targetReps: 10,
			level: 1,
		},
		[ExerciseFamily.rest]: {
			id: "rest1",
			name: "Rest",
			description: "Rest",
			exerciseFamily: ExerciseFamily.rest,
			targetReps: 0,
			level: 1,
		},
	}

	private getDifficulties(families: ExerciseFamily[]): Difficulty[] {
		return families.map((it) => this.difficultiesValues[it])
	}

	private getLastCompletedSets(difficulties: Difficulty[]): [string, number][] {
		return difficulties.map((it) => [it.id, 0])
	}
}
