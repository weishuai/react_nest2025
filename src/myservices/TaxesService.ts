import { TaxesRepo } from '../myrepositories';
import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class TaxesService {
  private taxesRepo = new TaxesRepo();

  async findOneTaxes(Id: string) {
    ///const issue = new Fhtest();
    return this.taxesRepo.getTaxessById(Id);
  }

  async createTaxes(taxesVo: TaxesVo) {
    ///taxesVo.id = id();
    return this.taxesRepo.create(taxesVo);
  }

  async updateaTaxes(Id: string, user_id: string, taxesVo: TaxesVo) {
    taxesVo.updatedAt = new Date();

    taxesVo.updatedUid = user_id;
    return this.taxesRepo.update(Id, user_id, taxesVo);
  }

  async removeTaxes(Ids: string[]) {
    return this.taxesRepo.remove(Ids);
  }

  async getTaxesById(id: string) {
    return this.taxesRepo.getTaxessById(id);
  }

  async getTaxes(search: TaxesSearchVo) {
    return this.taxesRepo.getTaxes(search);
  }

  async getTaxesAll(search: TaxesSearchVo) {
    return this.taxesRepo.getTaxesAll(search);
  }

  async getTaxesAllView() {
    return this.taxesRepo.getTaxesAllView();
  }
}
