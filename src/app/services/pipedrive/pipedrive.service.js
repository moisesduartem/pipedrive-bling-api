import { Deal } from '../../entities/deal.entity';

class PipedriveService {
  api;

  constructor(api) {
    this.api = api;
  }

  async getWonDeals() {
    const { data } = await this.api.get('/deals?limit=500&status=won');
    const deals = data.data.map(({
      title, value, currency, add_time: addTime,
    }) => {
      return new Deal({
        title, value, currency, addTime,
      });
    });
    return deals;
  }
}

export { PipedriveService };
