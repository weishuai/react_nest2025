import { SearchVo } from '../myutils/searchvo';

export class DeliveryOrderVo {
  id: string;

  linkedInvoice: string;

  deliveryName: string;

  clientCompany: string;

  deliveryDate: Date;

  clientContact: string;

  creator: string;

  postCode: string;

  street: string;

  city: string;

  state: string;

  country: string;

  termsConditions: string;

  remark: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  refNumber: string;
}

export class DeliveryOrderSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
