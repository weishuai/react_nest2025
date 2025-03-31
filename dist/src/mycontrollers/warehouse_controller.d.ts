import { WarehouseVo } from '../myvo/warehouse_vo';
export declare class WarehouseController {
    private warehouseService;
    createWarehouse(warehouseVo: WarehouseVo): Promise<import("typeorm").InsertResult>;
    updateaWarehouse(userToken: string, Id: string, warehouseVo: WarehouseVo): Promise<import("typeorm").UpdateResult>;
    removeWarehouse(Id: string): Promise<import("typeorm").UpdateResult>;
    getWarehouseById(Id: string): Promise<any>;
    getWarehouseList(query: any): Promise<any[]>;
    getWarehouseAll(): Promise<any[]>;
    getWarehouseAllView(): Promise<any[]>;
}
