import { SearchVo } from '../myutils/searchvo';
export class StockValuationLayerVo {
  id = '';
  name = '';
  fhdate = null 
  product = '' 
  number = 0 
  unit = '' 
  totalValue = 0 
  company = '' 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class StockValuationLayerSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
