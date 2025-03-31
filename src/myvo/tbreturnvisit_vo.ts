import { SearchVo } from '../myutils/searchvo';
export class TbreturnvisitVo {
  id = '';
  name = '';
  mid = null 
  project = null 
  fhdate = null 
  location = null 
  contacts = null 
  contactInformation = null 
  rreturnVisitDescription = null 
  annex = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class TbreturnvisitSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
