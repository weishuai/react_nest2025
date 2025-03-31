import { SearchVo } from '../myutils/searchvo';

export class LeadpoolsVo {
  name: string;

  id: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class LeadpoolsSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
