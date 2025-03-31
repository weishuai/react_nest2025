import { SearchVo } from '../myutils/searchvo';

export class JobVo {
  id: string;

  title: string;
  name: string;
  description: string;
  wiType: string;

  clients: string;

  enabled: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  photo: string;
}

export class JobSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
