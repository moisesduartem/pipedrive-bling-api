import { DealModel } from '../models/deal.model';

class DealRepository {
  insertMany(deals) {
    return DealModel.insertMany(deals);
  }

  async aggregateByDate() {
    return DealModel.aggregate().group({
      _id: {
        $dateToString: { format: '%Y-%m-%d', date: '$addTime' },
      },
      date: { $first: { $dateToString: { format: '%Y-%m-%d', date: '$addTime' } } },
      total: { $sum: '$value' },
    });
  }
}

export { DealRepository };
