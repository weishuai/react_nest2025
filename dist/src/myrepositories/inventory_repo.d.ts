import { InventorySearchVo, InventoryVo } from '../myvo/inventory_vo';
export declare class InventoryRepo {
    create(inventoryVo: InventoryVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, inventoryVo: InventoryVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getInventorysById(id: string): Promise<any>;
    getInventoryAll(): Promise<any[]>;
    getInventoryAllView(): Promise<any[]>;
    getInventoryList(search: InventorySearchVo): Promise<any[]>;
}
