import { SearchVo } from '../myutils/searchvo';
export class QualityInspectionVo {
  id = '';
  name = '';
  fhname = null 
  title = null 
  team = null 
  productTmlp = null 
  head = null 
  product = null 
  label = null 
  batch = null 
  rootCause = '' 
  pick = null 
  priority = null 
  fhtxt = '' 
  inspectionItems = null 
  checkAddress = null 
  correctiveAction = '' 
  preventiveActions = '' 
  sundry = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class QualityInspectionSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
