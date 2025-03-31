import { SearchVo } from '../myutils/searchvo';
export declare class myBomProductVo {
    id: string;
    name: string;
    mid: any;
    product: any;
    number: number;
    unit: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class myBomProductSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
