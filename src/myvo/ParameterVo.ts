import { SearchVo } from '../myutils/searchvo';

export class ParameterVo {
  id: string;

  name: string;

  key: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class ParameterSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
