class OrdersController {
  pipedriveService;
  blingService;

  constructor(pipedriveService, blingService, dealService) {
    this.pipedriveService = pipedriveService;
    this.blingService = blingService;
    this.dealService = dealService;
  }

  async registerWonDealsAsOrders(request, response) {
    try {
      const deals = await this.pipedriveService.getWonDeals();
      const registeredDeals = await this.blingService.createOrder(deals);
      this.dealService.insertMany(registeredDeals);
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        error: 'Failed to process request',
      });
    }
  }
}

export { OrdersController };
