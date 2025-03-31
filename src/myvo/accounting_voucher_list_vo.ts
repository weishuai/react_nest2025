import { SearchVo } from '../myutils/searchvo';
export class AccountingVoucherListVo {
  id = '';
  name = '';
  mid = null 
  product = null 
  note = null 
  landedCost = null 
  type = null 
  subject = null 
  analysis = null 
  number = 0 
  unit = null 
  price = 0 
  tax = 0 
  subtotal = 0 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class AccountingVoucherListSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
