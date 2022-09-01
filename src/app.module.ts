import { ApolloDriver } from "@nestjs/apollo"
import { Logger, Module } from "@nestjs/common"
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
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: (configService: ConfigService, logger: Logger) => {
				const config: TypeOrmModuleOptions = {
					type: "postgres",
					host:
						configService.get("INSTANCE_UNIX_SOCKET") ??
						configService.get("POSTGRES_HOST"),
					port: configService.get("POSTGRES_PORT"),
					username: configService.get("POSTGRES_USER"),
					password: configService.get("POSTGRES_PASSWORD"),
					database: configService.get("POSTGRES_DATABASE"),
					ssl: false,
					synchronize: true,
				}
				logger.log("******")
				logger.log("******")
				logger.log("******")
				logger.log("******")
				logger.log(config)
				logger.log("******")
				logger.log("******")
				logger.log("******")
				logger.log("******")
				logger.log("******")
				return config
			},
			inject: [ConfigService],
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
