import { SearchVo } from '../myutils/searchvo';
export class SellingPriceVo {
  id = '';
  name = '';
  fhname = null 
  company = 0 
  mygroup = null 
  dscountPolicy = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class SellingPriceSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
