import { SearchVo } from '../myutils/searchvo';

export class WorkItemVo {
  id: string;

  name: string;

  description: string;

  qty: string;

  unit: string;

  unitPrice: string;

  discount: string;

  total: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  mid: string;
}

export class WorkItemSearchVo extends SearchVo {
  fundType: string;

  status: number;

  mid: string;
}
