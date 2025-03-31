import {
  CustomizationRepo,
  InvoiceDetailsRepo,
  InvoiceItemRepo,
  InvoicePaymentRepo,
} from '../myrepositories';
import {
  InvoiceDetailsSearchVo,
  InvoiceDetailsVo,
} from '../myvo/InvoiceDetailsVo';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};

export class InvoiceDetailsService {
  private invoiceDetailsRepo = new InvoiceDetailsRepo();

  private customizationRepo = new CustomizationRepo();

  private invoiceItemRepo = new InvoiceItemRepo();

  private invoicePaymentRepo = new InvoicePaymentRepo();

  async findOneInvoiceDetails(Id: string) {
    ///const issue = new Fhtest();
    return this.invoiceDetailsRepo.getinvoiceDetailssById(Id);
  }

  async createInvoiceDetails(invoiceDetailsVo: InvoiceDetailsVo) {
    const mid = invoiceDetailsVo.id;
    ///invoiceDetailsVo.id = id();

    const refNumber = 'INV-';
    ///invoiceDetailsVo.refNumber = String((await this.customizationRepo.nextGetNo(refNumber)).No);
    this.invoiceItemRepo.updateInvoiceItemVoByMid(mid, invoiceDetailsVo.id);
    this.invoicePaymentRepo.updateInvoicePaymentVoByMid(
      mid,
      invoiceDetailsVo.id,
    );
    return this.invoiceDetailsRepo.create(invoiceDetailsVo);
  }

  async updateaInvoiceDetails(
    Id: string,
    user_id: string,
    invoiceDetailsVo: InvoiceDetailsVo,
  ) {
    invoiceDetailsVo.updatedAt = new Date();

    invoiceDetailsVo.updatedUid = user_id;
    return this.invoiceDetailsRepo.update(Id, user_id, invoiceDetailsVo);
  }

  async removeInvoiceDetails(Ids: string[]) {
    return this.invoiceDetailsRepo.remove(Ids);
  }

  ///预警事件
  async isAlertInvoiceDetails() {
    /*
    const listItems = await this.invoiceDetailsRepo.getinvoiceDetailsAllBydueDate();
    listItems.map((item) => {
      const FHdatime = new Date();
      const date3 = item.dueDate.getTime() - FHdatime.getTime();
      const days = Math.floor(date3 / (24 * 3600 * 1000));
      if (days < 5) {
        this.invoiceDetailsRepo.update(item.id, { isAlert: 'Warning' });
      }
    });
    */
  }

  async getInvoiceDetailsById(id: string) {
    return this.invoiceDetailsRepo.getinvoiceDetailssById(id);
  }

  async getInvoiceDetails(userId: string, search: InvoiceDetailsSearchVo) {
    return this.invoiceDetailsRepo.getinvoiceDetails(userId, search);
  }

  async getInvoiceDetailsAll(search: InvoiceDetailsSearchVo) {
    return this.invoiceDetailsRepo.getinvoiceDetailsAll(search);
  }

  async getInvoiceDetailsAllView() {
    return this.invoiceDetailsRepo.getinvoiceDetailsAllView();
  }
}
