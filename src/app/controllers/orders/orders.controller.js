class OrdersController {
  pipedrive;

  constructor(pipedrive) {
    this.pipedrive = pipedrive;
  }

  async registerWonDealsAsOrders(request, response) {
    const result = await this.pipedrive.getWonDeals();
    return response.status(200).json(result);
  }
}

export { OrdersController };
