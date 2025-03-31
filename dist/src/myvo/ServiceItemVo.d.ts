import { SearchVo } from '../myutils/searchvo';
export declare class ServiceItemVo {
    id: string;
    mid: string;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    qty: string;
    remarks: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ServiceItemSearchVo extends SearchVo {
    fundType: string;
    mid: string;
    status: number;
}
