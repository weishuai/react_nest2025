import { SearchVo } from '../myutils/searchvo';
export class SaleContractVo {
  id = '';
  name = '';
  fhname = null 
  releaseTime = null 
  project = null 
  version = null 
  custom = null 
  expectedCompletion = null 
  productionCompleted = null 
  deliveryCompleted = null 
  estimatedTime = null 
  contractAmount = 0 
  invoicingAmount = 0 
  collectionAmount = 0 
  completionProgress = null 
  specialRequirements = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class SaleContractSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
