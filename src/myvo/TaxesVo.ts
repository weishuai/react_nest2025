import { SearchVo } from '../myutils/searchvo';

export class TaxesVo {
  id: string;

  name: string;

  rate: string;

  source: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class TaxesSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
