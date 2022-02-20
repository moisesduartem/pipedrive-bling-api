import { getBlingApi } from './api.service';
import { BlingService } from './bling.service';

const createBlingService = () => new BlingService(getBlingApi());

export { createBlingService };
