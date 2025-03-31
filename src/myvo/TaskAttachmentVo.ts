import { SearchVo } from '../myutils/searchvo';

export class TaskAttachmentVo {
  id: string;

  subject: string;

  attachment: string;

  note: string;

  createdAt: Date;

  updatedAt: Date;

  isactived: string;

  islocked: string;

  createUid: string;

  updatedUid: string;

  mid: string;
}

export class TaskAttachmentSearchVo extends SearchVo {
  fundType: string;

  mid: string;

  status: number;
}
