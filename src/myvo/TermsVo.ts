import { SearchVo } from '../myutils/searchvo';

export class TermsVo {
  id: string;

  name: string;

  description: string;

  leaderId: string;

  roleId: string;

  backgroundColor: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class TermsSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
