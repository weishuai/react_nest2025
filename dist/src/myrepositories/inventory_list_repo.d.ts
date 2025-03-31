import { InventoryListSearchVo, InventoryListVo } from '../myvo/inventory_list_vo';
export declare class InventoryListRepo {
    create(inventoryListVo: InventoryListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, inventoryListVo: InventoryListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getInventoryListsById(id: string): Promise<any>;
    getInventoryListAll(): Promise<any[]>;
    getInventoryListAllView(): Promise<any[]>;
    getInventoryListList(search: InventoryListSearchVo): Promise<any[]>;
}
