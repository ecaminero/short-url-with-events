import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { RedisModule } from './redis/redis.module';
import { MetricsModule } from './metrics/metrics.module';

import { HttpModule } from '@nestjs/axios';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as env from './constants';


@Module({
  imports: [
    EventEmitterModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: env.DB_HOST,
      port: env.DB_PORT,
      username: env.DB_USERNAME,
      password: env.DB_PASSWORD,
      database: env.DB_DATABASE,
      synchronize: true,
      autoLoadEntities: true,
    }),
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 5,
      }),
    }),
    EventsModule,
    RedisModule,
    MetricsModule
  ],
})
export class AppModule {}