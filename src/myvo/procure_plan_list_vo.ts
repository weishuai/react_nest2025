import { SearchVo } from '../myutils/searchvo';
export class ProcurePlanListVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  fhtext = null 
  number = 0 
  orderedQuantity = 0 
  unit = null 
  unitPrice = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class ProcurePlanListSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
