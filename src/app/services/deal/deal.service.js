class DealService {
  dealRepository;

  constructor(dealRepository) {
    this.dealRepository = dealRepository;
  }

  async insertMany(deals) {
    await this.dealRepository.insertMany(deals);
  }
}

export { DealService };
