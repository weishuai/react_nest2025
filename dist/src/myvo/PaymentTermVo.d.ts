import { SearchVo } from '../myutils/searchvo';
export declare class PaymentTermVo {
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
export declare class PaymentTermSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
