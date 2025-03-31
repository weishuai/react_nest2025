import { SearchVo } from '../myutils/searchvo';

export class QuotationCommentsVo {
  id: string;

  mid: string;

  subject: string;

  assignTo: string;

  note: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class QuotationCommentsSearchVo extends SearchVo {
  fundType: string;

  status: number;

  mid: string;
}
