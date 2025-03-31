import { InventoryListSearchVo, InventoryListVo } from '../myvo/inventory_list_vo';
export declare class InventoryListService {
    private inventoryListRepo;
    findOneInventoryList(Id: string): Promise<any>;
    createInventoryList(inventoryListVo: InventoryListVo): Promise<import("typeorm").InsertResult>;
    updateaInventoryList(Id: string, user_id: string, inventoryListVo: InventoryListVo): Promise<import("typeorm").UpdateResult>;
    removeInventoryList(Ids: string): Promise<import("typeorm").UpdateResult>;
    getInventoryListById(id: string): Promise<any>;
    getInventoryListList(search: InventoryListSearchVo): Promise<any[]>;
    getInventoryListAll(): Promise<any[]>;
    getInventoryListAllView(): Promise<any[]>;
}
