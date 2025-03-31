import { SearchVo } from '../myutils/searchvo';
export class FhrunningVo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = null 
  fhF2 = null 
  fhF3 = null 
  fhF4 = 0 
  fhF5 = 0 
  fhF6 = 0 
  fhF7 = null 
  fhF8 = null 
  fhF9 = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhrunningSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
