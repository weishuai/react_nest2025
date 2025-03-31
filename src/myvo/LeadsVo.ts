import { SearchVo } from '../myutils/searchvo';

export class LeadsVo {
  id: string;

  name: string;
  
  description: string;

  jobTitle: string;

  company: string;

  industry: string;

  website: string;

  email: string;

  phoneNumber: string;

  mobileNumber: string;

  faxNumber: string;

  remark: string;

  leadOwner: string;

  leadPool: string;

  campaign: string;

  source: string;

  streetRoad: string;

  city: string;

  ctate: string;

  postCode: string;

  country: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  satus: string;

  linkedIn: string;
}

export class LeadsSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
