import { SearchVo } from '../myutils/searchvo';

export class FeedbackVo {
  id: string;

  name: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class FeedbackSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
