import { SearchVo } from '../myutils/searchvo';
export class FhtestVo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = 0 
  fhF2 = 0 
  fhF3 = null 
  fhF4 = null 
  fhF5 = 0 
  fhF6 = null 
  fhF7 = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhtestSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
