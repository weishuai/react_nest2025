import { ExchangeRateRepo } from '../myrepositories';
import { ExchangeRateSearchVo, ExchangeRateVo } from '../myvo/ExchangeRateVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class ExchangeRateService {
  private exchangeRateRepo = new ExchangeRateRepo();

  async findOneExchangeRate(Id: string) {
    ///const issue = new Fhtest();
    return this.exchangeRateRepo.getExchangeRatesById(Id);
  }

  async createExchangeRate(exchangeRateVo: ExchangeRateVo) {
    return this.exchangeRateRepo.create(exchangeRateVo);
  }

  async updateaExchangeRate(
    Id: string,
    user_id: string,
    exchangeRateVo: ExchangeRateVo,
  ) {
    exchangeRateVo.updatedAt = new Date();

    exchangeRateVo.updatedUid = user_id;
    return this.exchangeRateRepo.update(Id, user_id, exchangeRateVo);
  }

  async removeExchangeRate(Ids: string[]) {
    return this.exchangeRateRepo.remove(Ids);
  }

  async getExchangeRateById(id: string) {
    return this.exchangeRateRepo.getExchangeRatesById(id);
  }

  async getExchangeRate(search: ExchangeRateSearchVo) {
    return this.exchangeRateRepo.getExchangeRate(search);
  }

  async getExchangeRateAll(search: ExchangeRateSearchVo) {
    return this.exchangeRateRepo.getExchangeRateAll(search);
  }

  async getExchangeRateAllView() {
    return this.exchangeRateRepo.getExchangeRateAllView();
  }
}
