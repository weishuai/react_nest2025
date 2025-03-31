import { SearchVo } from '../myutils/searchvo';
export class myWorkVo {
  id = '';
  name = '';
  operationName = null 
  duration = null 
  workCenter = null 
  defaultDuration = 0 
  serialNumber = null 
  company = null 
  bom = null 
  worksheet = null 
  fhtext = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class myWorkSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
