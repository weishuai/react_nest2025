import { SearchVo } from '../myutils/searchvo';
export declare class StockValuationLayerVo {
    id: string;
    name: string;
    fhdate: any;
    product: string;
    number: number;
    unit: string;
    totalValue: number;
    company: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StockValuationLayerSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
