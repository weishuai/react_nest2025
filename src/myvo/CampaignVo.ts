import { SearchVo } from '../myutils/searchvo';

export class CampaignVo {
  name: string;

  id: string;

  starts: Date;

  ends: Date;

  owner: string;

  budget: number;

  status: string;

  description: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class CampaignSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
