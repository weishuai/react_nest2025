import { SearchVo } from '../myutils/searchvo';
export class FhmeasuringVo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = null 
  fhF2 = 0 
  fhF3 = null 
  fhF4 = 0 
  fhF5 = 0 
  fhF6 = 0 
  fhF7 = null 
  fhF8 = 0 
  fhF9 = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhmeasuringSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
