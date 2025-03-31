import { CurrencyRepo } from '../myrepositories';
import { CurrencySearchVo, CurrencyVo } from '../myvo/CurrencyVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class CurrencyService {
  private currencyRepo = new CurrencyRepo();

  async findOneCurrency(Id: string) {
    ///const issue = new Fhtest();
    return this.currencyRepo.getcurrencysById(Id);
  }

  async createCurrency(currencyVo: CurrencyVo) {
    return this.currencyRepo.create(currencyVo);
  }

  async updateaCurrency(Id: string, user_id: string, currencyVo: CurrencyVo) {
    currencyVo.updatedAt = new Date();

    currencyVo.updatedUid = user_id;
    return this.currencyRepo.update(Id, user_id, currencyVo);
  }

  async removeCurrency(Ids: string[]) {
    return this.currencyRepo.remove(Ids);
  }

  async getCurrencyById(id: string) {
    return this.currencyRepo.getcurrencysById(id);
  }

  async getCurrency(search: CurrencySearchVo) {
    return this.currencyRepo.getcurrency(search);
  }

  async getCurrencyAll(search: CurrencySearchVo) {
    return this.currencyRepo.getcurrencyAll(search);
  }

  async getCurrencyAllView() {
    return this.currencyRepo.getcurrencyAllView();
  }
}
