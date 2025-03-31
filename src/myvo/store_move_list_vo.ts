import { SearchVo } from '../myutils/searchvo';
export class StoreMoveListVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  demand = 0 
  reserve = 0 
  complete = 0 
  unit = null 
  sellingPrice = 0 
  costPprice = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StoreMoveListSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
