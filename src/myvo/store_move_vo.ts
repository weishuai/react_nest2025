import { SearchVo } from '../myutils/searchvo';
export class StoreMoveVo {
  id = '';
  name = '';
  partners = null 
  deliveryDate = null 
  sourceLocation = null 
  sourceDocument = null 
  type = null 
  owner = null 
  fhtime = null 
  notes = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StoreMoveSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
