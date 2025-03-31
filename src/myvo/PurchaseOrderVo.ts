import { SearchVo } from '../myutils/searchvo';

export class PurchaseOrderVo {
  id: string;

  name: string;

  currency: string;

  contact: string;

  paymentTerms: string;

  taxes: string;

  remark: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  refNumber: string;
}

export class PurchaseOrderSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
