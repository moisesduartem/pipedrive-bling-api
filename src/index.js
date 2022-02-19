import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { OrdersController } from './app/controllers/orders/orders.controller';
import { createPipedriveService } from './app/services/pipedrive/factory';

dotenv.config({
  path: `environments/.env.${process.env.NODE_ENV.trim()}`,
});

const app = express();

app.use(cors());
app.use(express.json());

app.get('/registerEarningsAsOrders', (request, response) => {
  const controller = new OrdersController(createPipedriveService());
  return controller.registerWonDealsAsOrders(request, response);
});

const server = app.listen(process.env.APP_PORT);

export { app, server };
