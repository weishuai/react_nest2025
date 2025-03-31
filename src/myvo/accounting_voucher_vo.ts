import { SearchVo } from '../myutils/searchvo';
export class AccountingVoucherVo {
  id = '';
  name = '';
  title = null 
  accountNumber = null 
  type = null 
  billReference = null 
  statementDate = null 
  accountingDate = null 
  paymentReference = '' 
  payeeBank = null 
  paymentTerms = null 
  journal = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class AccountingVoucherSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
