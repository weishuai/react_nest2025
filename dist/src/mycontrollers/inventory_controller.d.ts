import { InventoryVo } from '../myvo/inventory_vo';
export declare class InventoryController {
    private inventoryService;
    createInventory(inventoryVo: InventoryVo): Promise<import("typeorm").InsertResult>;
    updateaInventory(userToken: string, Id: string, inventoryVo: InventoryVo): Promise<import("typeorm").UpdateResult>;
    removeInventory(Id: string): Promise<import("typeorm").UpdateResult>;
    getInventoryById(Id: string): Promise<any>;
    getInventoryList(query: any): Promise<any[]>;
    getInventoryAll(): Promise<any[]>;
    getInventoryAllView(): Promise<any[]>;
}
