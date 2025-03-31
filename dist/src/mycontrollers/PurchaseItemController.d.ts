import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';
export declare class PurchaseItemController {
    private purchaseItemService;
    createPurchaseItem(PurchaseItemVo: PurchaseItemVo): Promise<import("typeorm").InsertResult>;
    updateaPurchaseItem(userToken: string, Id: string, PurchaseItemVo: PurchaseItemVo): Promise<import("typeorm").UpdateResult>;
    removePurchaseItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getPurchaseItemById(Id: string): Promise<any>;
    getPurchaseItem(search: PurchaseItemSearchVo): Promise<any[]>;
    getPurchaseItemAll(search: PurchaseItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPurchaseItemAllView(): Promise<any[]>;
}
