class PipedriveService {
  api;

  constructor(api) {
    this.api = api;
  }

  async getWonDeals() {
    const { data } = await this.api.get('/deals?limit=500&status=won');
    return data;
  }
}

export { PipedriveService };
