import { SearchVo } from '../myutils/searchvo';
export class HrContractVo {
  id = '';
  name = '';
  fhname = null 
  staff = null 
  department = null 
  job = null 
  company = null 
  payStructure = null 
  startDate = null 
  firstContractDate = null 
  endDate = null 
  workArrangement = null 
  HRSupervisor = null 
  wages = 0 
  fhtxt = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class HrContractSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
