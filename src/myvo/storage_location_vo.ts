import { SearchVo } from '../myutils/searchvo';
export class StoragelocationVo {
  id = '';
  name = '';
  myname = null 
  mid = null 
  type = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StoragelocationSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
