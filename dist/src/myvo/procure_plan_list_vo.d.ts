import { SearchVo } from '../myutils/searchvo';
export declare class ProcurePlanListVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    fhtext: any;
    number: number;
    orderedQuantity: number;
    unit: any;
    unitPrice: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ProcurePlanListSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
