import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as swaggerStats from 'swagger-stats';

export const AppUtils = {
  setupSwagger: (
    app: INestApplication,
    { user, pass }: { user: string; pass: string }
  ): void => {
    const options = new DocumentBuilder()
      .setTitle('Api Documentation')
      .addBearerAuth()
      .setDescription(
        'The API description built using swagger OpenApi. You can find out more about Swagger at http://swagger.io'
      )
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options, {});

    app.use(
      swaggerStats.getMiddleware({
        swaggerSpec: document,
        authentication: true,
        hostname: 'cit',
        uriPath: '/stats',
        onAuthenticate: function (
          request: any,
          username: string,
          password: string
        ) {
          // simple check for username and password
          return username === user && password === pass;
        },
      })
    );

    SwaggerModule.setup('doc', app, document, {
      explorer: true,
      swaggerOptions: {
        docExpansion: 'list',
        filter: true,
        showRequestDuration: true,
      },
    });
  },
};
