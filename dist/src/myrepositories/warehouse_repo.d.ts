import { WarehouseSearchVo, WarehouseVo } from '../myvo/warehouse_vo';
export declare class WarehouseRepo {
    create(warehouseVo: WarehouseVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, warehouseVo: WarehouseVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWarehousesById(id: string): Promise<any>;
    getWarehouseAll(): Promise<any[]>;
    getWarehouseAllView(): Promise<any[]>;
    getWarehouseList(search: WarehouseSearchVo): Promise<any[]>;
}
