import { SearchVo } from '../myutils/searchvo';
export class TbmatchinglineVo {
  id = '';
  name = '';
  mid = null 
  rawMaterial = null 
  batchNumber = null 
  number = 0 
  notes = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class TbmatchinglineSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
