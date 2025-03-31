import { QuotationItemRepo } from '../myrepositories';
import {
  QuotationItemSearchVo,
  QuotationItemVo,
} from '../myvo/QuotationItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class QuotationItemService {
  private quotationItemRepo = new QuotationItemRepo();

  async findOneQuotationItem(Id: string) {
    ///const issue = new Fhtest();
    return this.quotationItemRepo.getQuotationItemsById(Id);
  }

  async createQuotationItem(quotationItemVo: QuotationItemVo) {
    ///quotationItemVo.id = id();
    return this.quotationItemRepo.create(quotationItemVo);
  }

  async updateaQuotationItem(
    Id: string,
    user_id: string,
    quotationItemVo: QuotationItemVo,
  ) {
    quotationItemVo.updatedAt = new Date();

    quotationItemVo.updatedUid = user_id;
    return this.quotationItemRepo.update(Id, user_id, quotationItemVo);
  }

  async removeQuotationItem(Ids: string[]) {
    return this.quotationItemRepo.remove(Ids);
  }

  async getQuotationItemById(id: string) {
    return this.quotationItemRepo.getQuotationItemsById(id);
  }

  async getQuotationItemsAllByMid(mid: string) {
    return this.quotationItemRepo.getQuotationItemsAllByMid(mid);
  }

  async getQuotationItem(search: QuotationItemSearchVo) {
    return this.quotationItemRepo.getQuotationItem(search);
  }

  async getQuotationItemAll(search: QuotationItemSearchVo) {
    return this.quotationItemRepo.getQuotationItemAll(search);
  }

  async getQuotationItemAllView() {
    return this.quotationItemRepo.getQuotationItemAllView();
  }
}
