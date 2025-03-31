import { SearchVo } from '../myutils/searchvo';
export declare class StockWarehouseOrderpointVo {
    id: string;
    name: string;
    product: string;
    position: string;
    inHand: number;
    prediction: number;
    route: string;
    min: number;
    max: number;
    order: number;
    unit: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StockWarehouseOrderpointSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
