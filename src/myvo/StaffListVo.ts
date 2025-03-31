import { SearchVo } from '../myutils/searchvo';

export class StaffListVo {
  id: string;
  name: string;

  description: string;

  fullName: string;

  contactNo: string;

  email: string;

  role: string;

  clients: string;

  type: string;

  login: string;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class LStaffListVo {
  id: string;

  fullName: string;

  contactNo: string;

  email: string;

  role: string;

  clients: string;

  type: string;

  login: string;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class StaffListSearchVo extends SearchVo {
  fundType: string;

  status: number;
}
