import { SearchVo } from '../myutils/searchvo';
export class FhtestFht1Vo {
  id = '';
  name = '';
  fhname = null 
  fhF1 = 0 
  fhF2 = 0 
  fhF3 = null 
  fhF4 = null 
  fhF5 = 0 
  fhF6 = null 
  fhF7 = null 
  fhF8 = null 
  fhF9 = null 
  fhF10 = null 
  fhF11 = null 
  fhF12 = null 
  fhF13 = null 
  fhF14 = null 
  fhF15 = null 
  fhF16 = 0 
  fhF17 = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class FhtestFht1SearchVo extends SearchVo {
  fundType: string;
  status: number;
}
