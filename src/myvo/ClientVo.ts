import { SearchVo } from '../myutils/searchvo';

export class ClientVo {
  name: string;

  id: string;

  description: string;

  type: string;

  accountOwner: string;

  regNumber: string;

  industry: string;

  phoneNumber: string;

  website: string;

  faxNumber: string;

  street: string;

  city: string;

  state: string;

  postCode: string;

  country: string;

  don: string;

  ref: string;

  gender: string;

  dateBirth: Date;

  language: string;

  income: string;

  marital: string;

  children: string;

  additionalField4: string;

  additionalField5: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  accountsType: string;

  accountTag: string;

  clientState: string;
}

export class ClientSearchVo extends SearchVo {
  fundType: string;

  accountsType: string;

  mid: string;

  mtable: string;

  status: number;

  startDate: string;

  endDate: string;

  stageName: string;

  Owner: string;

  month: string;

  Client: string;
}

export class FHClientSearchVo {
  startDate: string;

  endDate: string;

  stageName: string;

  Owner: string;

  month: string;

  Client: string;
}
