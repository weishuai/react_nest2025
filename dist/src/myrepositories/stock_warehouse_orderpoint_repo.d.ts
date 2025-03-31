import { StockWarehouseOrderpointSearchVo, StockWarehouseOrderpointVo } from '../myvo/stock_warehouse_orderpoint_vo';
export declare class StockWarehouseOrderpointRepo {
    create(stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, stockWarehouseOrderpointVo: StockWarehouseOrderpointVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStockWarehouseOrderpointsById(id: string): Promise<any>;
    getStockWarehouseOrderpointAll(): Promise<any[]>;
    getStockWarehouseOrderpointAllView(): Promise<any[]>;
    getStockWarehouseOrderpointList(search: StockWarehouseOrderpointSearchVo): Promise<any[]>;
}
