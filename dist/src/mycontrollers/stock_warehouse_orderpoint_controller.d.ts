import { StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
export declare class StockWarehouseOrderpointController {
    private stockWarehouseOrderpointService;
    createStockWarehouseOrderpoint(stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").InsertResult>;
    updateaStockWarehouseOrderpoint(userToken: string, Id: string, stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").UpdateResult>;
    removeStockWarehouseOrderpoint(Id: string): Promise<import("typeorm").UpdateResult>;
    getStockWarehouseOrderpointById(Id: string): Promise<any>;
    getStockWarehouseOrderpointList(query: any): Promise<any[]>;
    getStockWarehouseOrderpointAll(): Promise<any[]>;
    getStockWarehouseOrderpointAllView(): Promise<any[]>;
}
