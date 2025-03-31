import { SearchVo } from '../myutils/searchvo';
export class TbaftersaleVo {
  id = '';
  name = '';
  mid = null 
  project = null 
  fhdate = null 
  location = null 
  contacts = null 
  contactInformation = null 
  VisitDescription = null 
  problemHandling = null 
  remainingProblems = null 
  afterSalesType = null 
  annex = null 
  processedBy = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class TbaftersaleSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
