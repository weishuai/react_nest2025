import { SearchVo } from '../myutils/searchvo';
export class AccountTagVo {
  id = '';
  name = '';
  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class AccountTagSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
