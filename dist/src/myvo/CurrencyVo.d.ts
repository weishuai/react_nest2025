import { SearchVo } from '../myutils/searchvo';
export declare class CurrencyVo {
    id: string;
    name: string;
    rate: string;
    source: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class CurrencySearchVo extends SearchVo {
    fundType: string;
    status: number;
}
