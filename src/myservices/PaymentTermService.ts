import { PaymentTermRepo } from '../myrepositories';
import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class PaymentTermService {
  private paymentTermRepo = new PaymentTermRepo();

  async findOnePaymentTerm(Id: string) {
    ///const issue = new Fhtest();
    return this.paymentTermRepo.getPaymentTermsById(Id);
  }

  async createPaymentTerm(paymentTermVo: PaymentTermVo) {
    ///paymentTermVo.id = id();
    return this.paymentTermRepo.create(paymentTermVo);
  }

  async updateaPaymentTerm(
    Id: string,
    user_id: string,
    paymentTermVo: PaymentTermVo,
  ) {
    paymentTermVo.updatedAt = new Date();

    paymentTermVo.updatedUid = user_id;
    return this.paymentTermRepo.update(Id, user_id, paymentTermVo);
  }

  async removePaymentTerm(Ids: string[]) {
    return this.paymentTermRepo.remove(Ids);
  }

  async getPaymentTermById(id: string) {
    return this.paymentTermRepo.getPaymentTermsById(id);
  }

  async getPaymentTerm(search: PaymentTermSearchVo) {
    return this.paymentTermRepo.getPaymentTerm(search);
  }

  async getPaymentTermAll(search: PaymentTermSearchVo) {
    return this.paymentTermRepo.getPaymentTermAll(search);
  }

  async getPaymentTermAllView() {
    return this.paymentTermRepo.getPaymentTermAllView();
  }
}
