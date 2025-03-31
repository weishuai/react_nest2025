import { InventorySearchVo, InventoryVo } from '../myvo/inventory_vo';
export declare class InventoryService {
    private inventoryRepo;
    findOneInventory(Id: string): Promise<any>;
    createInventory(inventoryVo: InventoryVo): Promise<import("typeorm").InsertResult>;
    updateaInventory(Id: string, user_id: string, inventoryVo: InventoryVo): Promise<import("typeorm").UpdateResult>;
    removeInventory(Ids: string): Promise<import("typeorm").UpdateResult>;
    getInventoryById(id: string): Promise<any>;
    getInventoryList(search: InventorySearchVo): Promise<any[]>;
    getInventoryAll(): Promise<any[]>;
    getInventoryAllView(): Promise<any[]>;
}
