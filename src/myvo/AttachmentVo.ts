import { SearchVo } from '../myutils/searchvo';

export class AttachmentVo {
  id: string;

  ownerId: string;

  ownerType: number;

  dateUploaded: Date;

  uploadUserId: string;

  when: string;

  isDel: number;

  name: string;

  url: string;

  mimetype: string;

  size: number;

  mid: string;
}

export class AttachmentSearchVo extends SearchVo {
  fundType: string;

  status: number;

  mid: string;

  when: string;

  types: string;
}

export type OwnerType = 'Issue' | 'Vendor' | 'TrackingLog' | 'Quotation';

export const OwnerTypes: { [index in OwnerType]: number } = {
  Issue: 0,
  Vendor: 1,
  TrackingLog: 2,
  Quotation: 3,
};
