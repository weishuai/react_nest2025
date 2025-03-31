import { SearchVo } from '../myutils/searchvo';
export class mybomVo {
  id = '';
  name = '';
  product = null 
  code = null 
  productTelm = null 
  bomType = null 
  number = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class mybomSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
