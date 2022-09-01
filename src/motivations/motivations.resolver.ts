import { Query, Resolver } from "@nestjs/graphql"
import { Motivation } from "./motivation.dto"

@Resolver()
export class MotivationsResolver {
	@Query(() => Motivation)
	todaysMotivation(): Motivation {
		return {
			motivationLevel: 100,
			shouldIWorkOutToday: true,
		}
	}
}
