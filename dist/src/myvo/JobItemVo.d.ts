import { SearchVo } from '../myutils/searchvo';
export declare class JobItemVo {
    id: string;
    step: string;
    title: string;
    template: string;
    require: number;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    mid: string;
    photo: string;
}
export declare class JobItemSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
    jobitemIDs: string;
}
