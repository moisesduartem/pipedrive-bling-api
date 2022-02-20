class OrdersController {
  pipedrive;
  bling;

  constructor(pipedrive, bling) {
    this.pipedrive = pipedrive;
    this.bling = bling;
  }

  async registerWonDealsAsOrders(request, response) {
    const deals = await this.pipedrive.getWonDeals();
    const registeredDeals = await this.bling.createOrder(deals);
    return response.status(200).json(registeredDeals);
  }
}

export { OrdersController };
