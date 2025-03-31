import { SearchVo } from '../myutils/searchvo';
export class InventoryVo {
  id = '';
  name = '';
  title = null 
  position = null 
  jobDate = null 
  warehouse = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class InventorySearchVo extends SearchVo {
  fundType: string;
  status: number;
}
