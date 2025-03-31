import { SearchVo } from '../myutils/searchvo';
export declare class StageVo {
    id: string;
    name: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StageSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
