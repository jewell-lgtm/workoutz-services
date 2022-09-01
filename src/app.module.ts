import { ApolloDriver } from "@nestjs/apollo"
import { Module } from "@nestjs/common"
import { ConfigModule, ConfigService } from "@nestjs/config"
import { GraphQLModule } from "@nestjs/graphql"
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { MotivationsResolver } from "./motivations/motivations.resolver"

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
			resolvers: [MotivationsResolver],
		}),
	],
	controllers: [AppController],
	providers: [AppService, MotivationsResolver],
})
export class AppModule {}
