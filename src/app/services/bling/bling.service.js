import qs from 'qs';
import * as uuid from 'uuid';

class BlingService {
  api;

  constructor(api) {
    this.api = api;
  }

  async createOrder(deals = []) {
    const succededOrders = deals.filter(async (deal) => {
      try {
        const xml = this.createOrderXml({ customerName: deal.title }).replace(/(\r\n|\n|\r)/gm, ' ');
        const body = qs.stringify({ xml });
        await this.api.post('/pedido/json', body);
        return true;
      } catch (err) {
        return false;
      }
    });
    return succededOrders;
  }

  createOrderXml({ customerName }) {
    const xmlMetaData = '<?xml version="1.0" encoding="UTF-8"?>';
    const itemsPart = `<item><codigo>${uuid.v4()}</codigo></item>`;
    const ordersPart = `<pedido><cliente><nome>${customerName}</nome></cliente><itens>${itemsPart}</itens></pedido>`;
    return `${xmlMetaData}${ordersPart}`;
  }
}

export { BlingService };
