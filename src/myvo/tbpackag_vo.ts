import { SearchVo } from '../myutils/searchvo';
export class TbpackagVo {
  id = '';
  name = '';
  mid = null 
  project = null 
  product = null 
  productCode = null 
  code = null 
  deliveryQuantity = 0 
  deliveryDate = null 
  factoryOrderNumber = null 
  trackingNumber = null 
  expressCompany = null 
  recipient = null 
  shipper = null 
  photo = null 

  description = '';
  createdAt: Date = new Date();
  updatedAt: Date = new Date();
  isactived = '';
  islocked = '';
  createUid = '';
  updatedUid = '';
}

export class TbpackagSearchVo extends SearchVo {
  fundType: string;
  status: number;
}
