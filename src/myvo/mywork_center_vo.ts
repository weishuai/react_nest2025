import { SearchVo } from '../myutils/searchvo';
export class myWorkCenterVo {
  id = '';
  name = '';
  workcenter = null 
  code = null 
  title = null 
  workingHours = 0 
  fhreplace = null 
  timeEfficiency = null 
  capacity = null 
  oee = null 
  setTime = 0 
  cleaningTime = 0 
  hourlyCost = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class myWorkCenterSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
