import { SearchVo } from '../myutils/searchvo';
export declare class WarrantyVo {
    id: string;
    name: string;
    product: string;
    startDate: Date;
    endDate: Date;
    isRemind: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class WarrantySearchVo extends SearchVo {
    fundType: string;
    status: number;
}
