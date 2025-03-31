import { SearchVo } from '../myutils/searchvo';
export class FhreformVo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = null 
  fhF2 = null 
  fhF3 = null 
  fhF4 = null 
  fhF5 = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhreformSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
