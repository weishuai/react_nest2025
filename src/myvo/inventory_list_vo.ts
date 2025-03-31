import { SearchVo } from '../myutils/searchvo';
export class InventoryListVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  unit = null 
  position = null 
  batch = null 
  package = null 
  owner = null 
  theoretical = 0 
  actualQuantity = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class InventoryListSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
