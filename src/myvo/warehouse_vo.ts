import { SearchVo } from '../myutils/searchvo';
export class WarehouseVo {
  id = '';
  name = '';
  myname = null 
  fhname = null 
  address = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class WarehouseSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
