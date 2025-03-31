import { SearchVo } from '../myutils/searchvo';

export class CustomizationVo {
  id: string;

  name: string;

  format: string;

  value: number;

  table: string;

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

export class CustomizationSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
