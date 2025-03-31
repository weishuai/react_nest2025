import { QuotationCommentsRepo } from '../myrepositories';
import {
  QuotationCommentsSearchVo,
  QuotationCommentsVo,
} from '../myvo/QuotationCommentsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class QuotationCommentsService {
  private quotationCommentsRepo = new QuotationCommentsRepo();
  async findOneQuotationComments(Id: string) {
    ///const issue = new Fhtest();
    return this.quotationCommentsRepo.getQuotationCommentssById(Id);
  }

  async createQuotationComments(quotationCommentsVo: QuotationCommentsVo) {
    ///quotationCommentsVo.id = id();
    return this.quotationCommentsRepo.create(quotationCommentsVo);
  }

  async updateaQuotationComments(
    Id: string,
    user_id: string,
    quotationCommentsVo: QuotationCommentsVo,
  ) {
    quotationCommentsVo.updatedAt = new Date();

    quotationCommentsVo.updatedUid = user_id;
    return this.quotationCommentsRepo.update(Id, user_id, quotationCommentsVo);
  }

  async removeQuotationComments(Ids: string[]) {
    return this.quotationCommentsRepo.remove(Ids);
  }

  async getQuotationCommentsById(id: string) {
    return this.quotationCommentsRepo.getQuotationCommentssById(id);
  }

  async getQuotationComments(search: QuotationCommentsSearchVo) {
    return this.quotationCommentsRepo.getQuotationComments(search);
  }

  async getQuotationCommentsAll(search: QuotationCommentsSearchVo) {
    return this.quotationCommentsRepo.getQuotationCommentsAll(search);
  }

  async getQuotationCommentsAllView() {
    return this.quotationCommentsRepo.getQuotationCommentsAllView();
  }
}
