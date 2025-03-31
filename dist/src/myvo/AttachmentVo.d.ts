import { SearchVo } from '../myutils/searchvo';
export declare class AttachmentVo {
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
export declare class AttachmentSearchVo extends SearchVo {
    fundType: string;
    status: number;
    mid: string;
    when: string;
    types: string;
}
export declare type OwnerType = 'Issue' | 'Vendor' | 'TrackingLog' | 'Quotation';
export declare const OwnerTypes: {
    [index in OwnerType]: number;
};
