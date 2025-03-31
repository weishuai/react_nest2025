import { SearchVo } from '../myutils/searchvo';
export class myBomProductVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  number = 0 
  unit = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class myBomProductSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
