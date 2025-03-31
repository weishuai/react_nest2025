import { SearchVo } from '../myutils/searchvo';

export class InvoiceItemVo {
  id: string;

  name: string;

  description: string;

  qty: string;

  unit: string;

  unitPrice: string;

  remark: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  mid: string;
}

export class InvoiceItemSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
