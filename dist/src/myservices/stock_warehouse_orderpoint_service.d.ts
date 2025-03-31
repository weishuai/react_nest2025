import { StockWarehouseOrderpointSearchVo, StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
export declare class StockWarehouseOrderpointService {
    private stockWarehouseOrderpointRepo;
    findOneStockWarehouseOrderpoint(Id: string): Promise<any>;
    createStockWarehouseOrderpoint(stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").InsertResult>;
    updateaStockWarehouseOrderpoint(Id: string, user_id: string, stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").UpdateResult>;
    removeStockWarehouseOrderpoint(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStockWarehouseOrderpointById(id: string): Promise<any>;
    getStockWarehouseOrderpointList(search: StockWarehouseOrderpointSearchVo): Promise<any[]>;
    getStockWarehouseOrderpointAll(): Promise<any[]>;
    getStockWarehouseOrderpointAllView(): Promise<any[]>;
}
