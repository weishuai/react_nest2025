import { SearchVo } from '../myutils/searchvo';
export class ReturnorderVo {
  id = '';
  name = '';
  project = null 
  custom = null 
  Invoice = null 
  contractNumber = null 
  contractQuantity = 0 
  product = null 
  shipper = null 
  deliveryQuantity = 0 
  outageQuantity = 0 
  deliveryType = null 
  trackingNumber = null 
  recipient = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class ReturnorderSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
