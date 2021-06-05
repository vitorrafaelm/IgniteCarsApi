import 'reflect-metadata';
// eslint-disable-next-line import/no-extraneous-dependencies
import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import swaggerUI from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

import './database';
import './shared/container';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log('Server is running'));
