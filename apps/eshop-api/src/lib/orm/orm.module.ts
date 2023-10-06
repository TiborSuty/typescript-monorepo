import { Logger, Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoadStrategy } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { BaseRepository } from '../../common/database/base.repository';
import * as Entities from '../../entities';
import { User } from '../../entities';

const logger = new Logger('MikroORM');

// @Module({
//   imports: [
//     MikroOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgresql',
//         host: configService.get('database.host'),
//         port: configService.get<number>('database.port'),
//         password: configService.get('database.password'),
//         user: configService.get('database.username'),
//         dbName: configService.get('database.dbName'),
//         entities: ['dist/apps/eshop-api/**/*.entity.js'],
//         entitiesTs: ['apps/eshop-api/src/modules/**/*.entity.ts'],
//         debug: true,
//         loadStrategy: LoadStrategy.JOINED,
//         highlighter: new SqlHighlighter(),
//         metadataProvider: TsMorphMetadataProvider,
//         entityRepository: BaseRepository,
//         allowGlobalContext: true,
//         registerRequestContext: false,
//         pool: { min: 2, max: 10 },
//         logger: logger.log.bind(logger),
//         migrations: {
//           path: 'dist/migrations',
//           pathTs: 'src/migrations',
//         },
//       }),
//       inject: [ConfigService],
//     }),
//     MikroOrmModule.forFeature({
//       entities: [...Object.values(Entities)],
//     }),
//   ],
//   exports: [MikroOrmModule],
// })
@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['../../../../../dist/apps/eshop-api/**/*.entity.js'],
      entitiesTs: ['../../modules/**/*.entity.ts'],
      autoLoadEntities: true,
      type: 'postgresql',
      host: '127.0.0.1',
      port: 6666,
      password: 'HRASKO',
      user: 'JANKO',
      dbName: 'JANKO666',
      migrations: {
        path: 'dist/apps/eshop-api/migrations',
        pathTs: 'apps/eshop-api/src/migrations',
      },
    }),
    // MikroOrmModule.forFeature({
    //   entities: [User],
    // }),
  ],
})
export class OrmModule {}
