import { OrdersController } from './orders.controller';

import { createBlingService } from '../../services/bling/factory';
import { createDealService } from '../../services/deal/factory';
import { createPipedriveService } from '../../services/pipedrive/factory';

const ordersControllerFactory = () => new OrdersController(
  createPipedriveService(),
  createBlingService(),
  createDealService(),
);

export { ordersControllerFactory };
