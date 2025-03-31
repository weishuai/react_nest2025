import { InvoiceItemRepo } from '../myrepositories';
import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class InvoiceItemService {
  private invoiceItemRepo = new InvoiceItemRepo();

  async findOneInvoiceItem(Id: string) {
    ///const issue = new Fhtest();
    return this.invoiceItemRepo.getinvoiceItemsById(Id);
  }

  async createInvoiceItem(invoiceItemVo: InvoiceItemVo) {
    ///invoiceItemVo.id = id();
    return this.invoiceItemRepo.create(invoiceItemVo);
  }

  async updateaInvoiceItem(
    Id: string,
    user_id: string,
    invoiceItemVo: InvoiceItemVo,
  ) {
    invoiceItemVo.updatedAt = new Date();

    invoiceItemVo.updatedUid = user_id;
    return this.invoiceItemRepo.update(Id, user_id, invoiceItemVo);
  }

  async removeInvoiceItem(Ids: string[]) {
    return this.invoiceItemRepo.remove(Ids);
  }

  async removeToInvoiceItem(Id: string) {
    return this.invoiceItemRepo.updateToInvoiceItemVoByMid(Id);
  }

  async getInvoiceItemById(id: string) {
    return this.invoiceItemRepo.getinvoiceItemsById(id);
  }

  async getInvoiceItem(search: InvoiceItemSearchVo) {
    return this.invoiceItemRepo.getinvoiceItem(search);
  }

  async getInvoiceItemAll(search: InvoiceItemSearchVo) {
    return this.invoiceItemRepo.getinvoiceItemAll(search);
  }

  async getInvoiceItemAllView() {
    return this.invoiceItemRepo.getinvoiceItemAllView();
  }
}
