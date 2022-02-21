class DealService {
  dealRepository;

  constructor(dealRepository) {
    this.dealRepository = dealRepository;
  }

  async insertMany(deals) {
    await this.dealRepository.insertMany(deals);
  }

  getDealsPerDate() {
    return this.dealRepository.aggregateByDate();
  }
}

export { DealService };
