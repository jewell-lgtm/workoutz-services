import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotivationsResolver } from './motivations/motivations.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        ssl: false,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    // GraphQLModule.forRootAsync({
    //   driver: ApolloDriver,
    //   useFactory(configService: ConfigService) {
    //     return {
    //       playground: true,
    //       debug: configService.get('NODE_ENV') !== 'production',
    //       autoSchemaFile: true,
    //       sortSchema: true,
    //       resolvers: [MotivationsResolver],
    //     };
    //   },
    // }),
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
