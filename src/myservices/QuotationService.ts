import {
  CustomizationRepo,
  QuotationItemRepo,
  QuotationRepo,
} from '../myrepositories';
import {
  FHQuotationSearchVo,
  QuotationSearchVo,
  QuotationVo,
} from '../myvo/QuotationVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class QuotationService {
  private quotationRepo = new QuotationRepo();
  private quotationItemRepo = new QuotationItemRepo();
  private customizationRepo = new CustomizationRepo();

  async findOneQuotation(Id: string) {
    ///const issue = new Fhtest();
    return this.quotationRepo.getquotationsById(Id);
  }

  async createQuotation(quotationVo: QuotationVo) {
    ///quotationVo.id = id();

    const mid = quotationVo.id;
    ///quotationVo.id = id();

    const refNumber = 'QN-';

    ///quotationVo.refNumber = String((await this.customizationRepo.nextGetNo(refNumber)).No);
    ///this.quotationItemRepo.updateQuotationItemsVoByMid(mid, quotationVo.id);

    return this.quotationRepo.create(quotationVo);
  }

  async updateaQuotation(
    Id: string,
    user_id: string,
    quotationVo: QuotationVo,
  ) {
    quotationVo.updatedAt = new Date();

    quotationVo.updatedUid = user_id;
    return this.quotationRepo.update(Id, user_id, quotationVo);
  }

  async removeQuotation(Ids: string[]) {
    return this.quotationRepo.remove(Ids);
  }

  async getQuotationById(id: string) {
    return this.quotationRepo.getquotationsById(id);
  }

  async getQuotation(userId: string, search: QuotationSearchVo) {
    return this.quotationRepo.getquotation(userId, search);
  }

  async getQuotationSQL(userId: string, search: FHQuotationSearchVo) {
    return this.quotationRepo.getquotationSQL(userId, search);
  }

  async getquotationSQLList(userId: string, search: QuotationSearchVo) {
    return this.quotationRepo.getquotationSQLList(userId, search);
  }

  async getQuotationAll(search: QuotationSearchVo) {
    return this.quotationRepo.getquotationAll(search);
  }

  async getQuotationAllView() {
    return this.quotationRepo.getquotationAllView();
  }
}
