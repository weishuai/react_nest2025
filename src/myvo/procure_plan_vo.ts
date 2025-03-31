import { SearchVo } from '../myutils/searchvo';
export class ProcurePlanVo {
  id = '';
  name = '';
  fhname = null 
  purchaser = null 
  applicationType = null 
  supplier = null 
  deadline = null 
  subscriptionDate = null 
  deliveryDate = null 
  sourceFile = null 
  jobType = null 
  company = null 
  term = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class ProcurePlanSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
