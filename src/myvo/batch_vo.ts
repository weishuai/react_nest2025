import { SearchVo } from '../myutils/searchvo';
export class BatchVo {
  id = '';
  name = '';
  titel = null 
  product = null 
  number = null 
  code = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class BatchSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
