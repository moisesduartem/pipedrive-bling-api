import { createDealRepository } from '../../../infra/database/repositories/factory';
import { DealService } from './deal.service';

const createDealService = () => new DealService(createDealRepository());

export { createDealService };
