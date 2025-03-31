import { SearchVo } from '../myutils/searchvo';

export class TrackingLogVo {
  id: string;

  no: string;

  category: string;

  sourceType: string;

  description: string;

  raisedBy: string;

  raisedDate: Date;

  assignTo: string;

  actionPlan: string;

  remarks: string | null;

  dateCompleted: Date;

  daysOpened: number;

  status: string;

  attachment: string;

  isDel: number;

  condoId: string;
}

export class TrackingLogAddVo {
  category: string;

  sourceType: string;

  description: string;

  raisedBy: string;

  raisedDate: Date;

  assignTo: string;

  actionPlan: string;

  remarks: string | null;

  condoId: string;
}

export class TrackingLogUpdateVo {
  id: string;

  category: string;

  sourceType: string;

  description: string;

  assignTo: string;

  actionPlan: string;

  remarks: string | null;

  condoId: string;

  status: string;
}

export class TrackingLogSearchVo extends SearchVo {
  condoId: string;

  status: string;
}

export class TrackingLogGetVo extends TrackingLogUpdateVo {
  no: string;

  assignTo: string;

  raisedBy: string;

  raisedDate: Date;

  dateCompleted: Date;

  daysOpened: number;
}
