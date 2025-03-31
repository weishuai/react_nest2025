import { SearchVo } from '../myutils/searchvo';
export declare class StockQuantVo {
    id: string;
    name: string;
    product: any;
    position: any;
    batch: any;
    package: any;
    inHand: number;
    available: number;
    unit: any;
    price: number;
    company: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StockQuantSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
