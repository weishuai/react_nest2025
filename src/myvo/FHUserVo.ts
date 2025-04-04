import { SearchVo } from '../myutils/searchvo';

export class FHUserSearchVo extends SearchVo {
  fundType: string;
  status: number;
}

export class FHUserVo {
  id: string;
  email: string;
  password: string;
  userName: string;
  app: string;
  timezone: string;
  isLocked: number;
  mobileCountryCode: string;
  mobileCallingCountryCode: string;
  mobileNumber: string;
  isDel: number;
  avatar: string;
  lastSignIn: Date;
  createdAt: Date;
}
