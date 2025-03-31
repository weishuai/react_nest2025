import { SearchVo } from '../myutils/searchvo';
export class SellingPriceListVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  variant = null 
  miniMumQuantity = 0 
  price = 0 
  startDate = null 
  endDate = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class SellingPriceListSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
