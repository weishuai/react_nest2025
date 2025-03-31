import { SearchVo } from '../myutils/searchvo';
export class ProcurePriceVo {
  id = '';
  name = '';
  supplier = null 
  product = null 
  productCode = null 
  deliveryLeadTime = null 
  product2 = null 
  productTemlp = null 
  number = null 
  unitPrice = 0 
  ative = null 
  company = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class ProcurePriceSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
