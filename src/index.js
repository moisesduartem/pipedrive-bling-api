import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { OrdersController } from './app/controllers/orders/orders.controller';
import { createPipedriveService } from './app/services/pipedrive/factory';
import { createBlingService } from './app/services/bling/factory';
import { createDatabaseConnection } from './infra/database/factory';
import { createDealService } from './app/services/deal/factory';

dotenv.config({
  path: `environments/.env.${process.env.NODE_ENV.trim()}`,
});

createDatabaseConnection();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/registerWonDealsAsOrders', (request, response) => {
  const controller = new OrdersController(
    createPipedriveService(),
    createBlingService(),
    createDealService(),
  );
  return controller.registerWonDealsAsOrders(request, response);
});

const server = app.listen(process.env.APP_PORT);

export { app, server };
