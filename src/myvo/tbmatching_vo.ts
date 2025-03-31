import { SearchVo } from '../myutils/searchvo';
export class TbmatchingVo {
  id = '';
  name = '';
  fhname = null 
  fhdate = null 
  sampleDate = null 
  documentNumber = null 
  customerCode = null 
  customerName = 0 
  sampleName = null 
  numbe = 0 
  component = null 
  appearanceStyle = null 
  requirements = null 
  technology = null 
  mycheck = 0 
  registration = 0 
  quotation = 0 
  manufacturingOrders = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class TbmatchingSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
