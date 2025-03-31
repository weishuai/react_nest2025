import { WarehouseSearchVo, WarehouseVo } from '../myvo/warehouse_vo';
export declare class WarehouseService {
    private warehouseRepo;
    findOneWarehouse(Id: string): Promise<any>;
    createWarehouse(warehouseVo: WarehouseVo): Promise<import("typeorm").InsertResult>;
    updateaWarehouse(Id: string, user_id: string, warehouseVo: WarehouseVo): Promise<import("typeorm").UpdateResult>;
    removeWarehouse(Ids: string): Promise<import("typeorm").UpdateResult>;
    getWarehouseById(id: string): Promise<any>;
    getWarehouseList(search: WarehouseSearchVo): Promise<any[]>;
    getWarehouseAll(): Promise<any[]>;
    getWarehouseAllView(): Promise<any[]>;
}
