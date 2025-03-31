import { InventoryListVo } from '../myvo/inventory_list_vo';
export declare class InventoryListController {
    private inventoryListService;
    createInventoryList(inventoryListVo: InventoryListVo): Promise<import("typeorm").InsertResult>;
    updateaInventoryList(userToken: string, Id: string, inventoryListVo: InventoryListVo): Promise<import("typeorm").UpdateResult>;
    removeInventoryList(Id: string): Promise<import("typeorm").UpdateResult>;
    getInventoryListById(Id: string): Promise<any>;
    getInventoryListList(query: any): Promise<any[]>;
    getInventoryListAll(): Promise<any[]>;
    getInventoryListAllView(): Promise<any[]>;
}
