import { SearchVo } from '../myutils/searchvo';

export class CondoAddVo {
  name: string;

  location: string;

  remarks: string;

  adminId: string;
}

export class CondoBriefVo extends CondoAddVo {
  id: string;

  adminId: string;

  createDate: Date;

  adminName: string;
}

export class CondoDetailVo extends CondoBriefVo {
  adminTel: string;

  adminEmail: string;

  creatorId: string;

  creatorName: string;

  createDate: Date;

  lastUpdate: Date;
}

export class CondoSelectVo {
  id: string;

  name: string;
}
