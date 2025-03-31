import { SearchVo } from '../myutils/searchvo';

export class TaskCommentsVo {
  id: string;

  subject: string;

  assignTo: string;

  note: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  mid: string;
}

export class TaskCommentsSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
