import { InvoicePaymentRepo } from '../myrepositories';
import {
  InvoicePaymentSearchVo,
  InvoicePaymentVo,
} from '../myvo/InvoicePaymentVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class InvoicePaymentService {
  private invoicePaymentRepo = new InvoicePaymentRepo();

  async findOneInvoicePayment(Id: string) {
    ///const issue = new Fhtest();
    return this.invoicePaymentRepo.getInvoicePaymentsById(Id);
  }

  async createInvoicePayment(invoicePaymentVo: InvoicePaymentVo) {
    ///invoicePaymentVo.id = id();
    return this.invoicePaymentRepo.create(invoicePaymentVo);
  }

  async updateaInvoicePayment(
    Id: string,
    user_id: string,
    invoicePaymentVo: InvoicePaymentVo,
  ) {
    invoicePaymentVo.updatedAt = new Date();

    invoicePaymentVo.updatedUid = user_id;
    return this.invoicePaymentRepo.update(Id, user_id, invoicePaymentVo);
  }

  async removeInvoicePayment(Ids: string[]) {
    return this.invoicePaymentRepo.remove(Ids);
  }

  async getInvoicePaymentById(id: string) {
    return this.invoicePaymentRepo.getInvoicePaymentsById(id);
  }

  async getInvoicePayment(search: InvoicePaymentSearchVo) {
    return this.invoicePaymentRepo.getinvoicePayment(search);
  }

  async getInvoicePaymentAll(search: InvoicePaymentSearchVo) {
    return this.invoicePaymentRepo.getinvoicePaymentAll(search);
  }

  async getInvoicePaymentAllView() {
    return this.invoicePaymentRepo.getinvoicePaymentAllView();
  }
}
