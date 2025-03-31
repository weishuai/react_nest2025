import { SearchVo } from '../myutils/searchvo';

export class ActivityVo {
  id: string;

  mid: string;

  mtable: string;

  types: string;

  subject: string;

  starts: Date;

  ends: Date;

  allDayEvent: number;

  attendees1: string;

  attendees2: string;

  relatedType: string;

  relatedTo: string;

  eventType: string;

  location: string;

  description: string;

  collaborate1: string;

  collaborate2: string;

  priority: string;

  status: string;

  attachment: string;

  emailTo: string;

  cc: string;

  sendMine: string;

  contact: string;

  caller: string;

  senderNumber: string;

  receiverNumber: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;
}

export class ActivitySearchVo extends SearchVo {
  fundType: string;

  status: number;

  mid: string;

  mtable: string;

  types: string;

  startDate: Date;

  endDate: Date;

  stageName: string;

  Owner: string;

  GROUPcreate_uid: string;

  GROUstageName: string;

  month: string;
}

export class FHActivitySearchVo {
  startDate: string;

  endDate: string;

  stageName: string;

  Owner: string;

  month: string;

  Client: string;
}
