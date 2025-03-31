import { SearchVo } from '../myutils/searchvo';
export declare class TaskCommentsVo {
    id: string;
    subject: string;
    assignTo: string;
    note: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
}
export declare class TaskCommentsSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
