import { SearchVo } from '../myutils/searchvo';
export declare class mybomVo {
    id: string;
    name: string;
    product: any;
    code: any;
    productTelm: any;
    bomType: any;
    number: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class mybomSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
