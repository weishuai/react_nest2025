import { SearchVo } from '../myutils/searchvo';
export class BankCashVo {
  id = '';
  name = '';
  report = null 
  fhdate = null 
  lable = null 
  refer = null 
  partners = null 
  amountMoney = 0 
  serialNumber = null 
  notes = '' 
  type = null 
  accountingVoucher = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class BankCashSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
