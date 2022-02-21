import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { createDatabaseConnection } from './infra/database/factory';
import { ordersControllerFactory } from './app/controllers/orders/factory';

dotenv.config({
  path: `environments/.env.${process.env.NODE_ENV.trim()}`,
});

createDatabaseConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/deals', (request, response) => {
  const controller = ordersControllerFactory();
  return controller.registerWonDealsAsOrders(request, response);
});

app.get('/deals', (request, response) => {
  const controller = ordersControllerFactory();
  return controller.getDealsPerDate(request, response);
});

const server = app.listen(process.env.APP_PORT);

export { app, server };
