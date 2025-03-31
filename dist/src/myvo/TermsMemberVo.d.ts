import { SearchVo } from '../myutils/searchvo';
export declare class TermsMemberVo {
    id: string;
    termsId: string;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TermsMemberSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
