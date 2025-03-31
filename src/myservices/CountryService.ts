import { CountryRepo } from '../myrepositories';
import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class CountryService {
  private countryRepo = new CountryRepo();

  async findOnecountry(Id: string) {
    ///const issue = new Fhtest();
    return this.countryRepo.getCountryById(Id);
  }

  async createCountry(countryVo: CountryVo) {
    return this.countryRepo.create(countryVo);
  }

  async updateaCountry(Id: string, user_id: string, countryVo: CountryVo) {
    countryVo.updatedAt = new Date();

    countryVo.updatedUid = user_id;
    return this.countryRepo.update(Id, user_id, countryVo);
  }

  async removeCountry(Ids: string[]) {
    return this.countryRepo.remove(Ids);
  }

  async getCountryById(id: string) {
    return this.countryRepo.getCountryById(id);
  }

  async getCountry(search: CountrySearchVo) {
    return this.countryRepo.getCountry(search);
  }

  async getCountryAll(search: CountrySearchVo) {
    return this.countryRepo.getCountryAll(search);
  }

  async getCountryAllView() {
    return this.countryRepo.getCountryAllView();
  }
}
