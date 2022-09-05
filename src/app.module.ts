import { ApolloDriver } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { GraphQLModule } from "@nestjs/graphql"
import { AppController } from "@/app.controller"
import { AppService } from "@/app.service"
import { GoogleCloudModule } from "@/google-cloud/google-cloud.module"
import { MotivationsResolver } from "@/motivations/motivations.resolver"
import { TodaysWorkoutResolver } from "@/todays-workout/todays-workout.resolver"

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: [".env.local", ".env"],
			cache: true,
		}),

		GraphQLModule.forRoot({
			driver: ApolloDriver,
			autoSchemaFile: true,
			sortSchema: true,
			resolvers: [MotivationsResolver, TodaysWorkoutResolver],
		}),

		GoogleCloudModule,
	],
	controllers: [AppController],
	providers: [AppService, MotivationsResolver, TodaysWorkoutResolver],
})
export class AppModule {}
