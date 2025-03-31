import { SearchVo } from '../myutils/searchvo';
export declare class TbmatchinglineVo {
    id: string;
    name: string;
    mid: any;
    rawMaterial: any;
    batchNumber: any;
    number: number;
    notes: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class TbmatchinglineSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
