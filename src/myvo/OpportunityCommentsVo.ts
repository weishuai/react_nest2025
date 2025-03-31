import { SearchVo } from '../myutils/searchvo';

export class OpportunityCommentsVo {
  id: string;

  mid: string;

  name: string;

  description: string;


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

export class OpportunityCommentsSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
