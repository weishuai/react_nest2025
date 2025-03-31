import { SearchVo } from '../myutils/searchvo';
export class FhservicePlanVo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = null 
  fhF2 = null 
  fhF3 = null 
  fhF4 = null 
  fhF5 = null 
  fhF6 = null 
  fhF7 = null 
  fhF8 = null 
  fhF9 = null 
  fhF10 = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhservicePlanSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
