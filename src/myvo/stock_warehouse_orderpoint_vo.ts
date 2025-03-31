import { SearchVo } from '../myutils/searchvo';
export class StockWarehouseOrderpointVo {
  id = '';
  name = '';
  product = '' 
  position = '' 
  inHand = 0 
  prediction = 0 
  route = '' 
  min = 0 
  max = 0 
  order = 0 
  unit = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StockWarehouseOrderpointSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
