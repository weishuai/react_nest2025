import { SearchVo } from '../myutils/searchvo';
export declare class NoteVo {
    id: string;
    subject: string;
    relatedType: string;
    relatedTo: string;
    note: string;
    attachment: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class NoteSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
