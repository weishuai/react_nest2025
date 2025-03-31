import { SearchVo } from '../myutils/searchvo';

export class ServiceContractVo {
  id: string;

  contractRef: string;

  createdBy: string;

  contractName: string;

  start_date: Date;

  end_date: Date;

  status: string;

  account: string;

  contractValues: string;

  sla: string;

  period: string;

  contractValue: string;

  clientPo: string;

  additionalField5: string;

  termsConditions: string;

  remark: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  currency: string;
}

export class ServiceContractSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
