import { SearchVo } from '../myutils/searchvo';
export class StockQuantVo {
  id = '';
  name = '';
  product = null 
  position = null 
  batch = null 
  package = null 
  inHand = 0 
  available = 0 
  unit = null 
  price = 0 
  company = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StockQuantSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
