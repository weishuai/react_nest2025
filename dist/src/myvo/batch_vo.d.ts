import { SearchVo } from '../myutils/searchvo';
export declare class BatchVo {
    id: string;
    name: string;
    titel: any;
    product: any;
    number: any;
    code: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class BatchSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
