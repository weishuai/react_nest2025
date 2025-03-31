import { SearchVo } from '../myutils/searchvo';

export class WorkVo {
  id: string;

  quote: string;

  title: string;

  states: string;

  qty: string;

  workType: string;

  room: string;

  client: string;

  contact: string;

  workInstructions: string;

  assignTo: string;

  remark: string;

  reedback: string;

  fullAddress: string;

  startDate: Date;

  endDate: Date;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  priority: string;

  createUid: string;

  updatedUid: string;

  refNumber: string;

  termsId: string;

  signBelowTxt: string;

  signBelowPhoto: string;

  signBelowUserid: string;

  signBelowTime: Date;

  backgroundColor: string;
}

export class WorkSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  mtable: string;

  status: number;

  fhstates: string;
}
