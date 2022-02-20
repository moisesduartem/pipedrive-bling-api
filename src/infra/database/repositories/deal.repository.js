import { DealModel } from '../models/deal.model';

class DealRepository {
  insertMany(deals) {
    return DealModel.insertMany(deals);
  }
}

export { DealRepository };
