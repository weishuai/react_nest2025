import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class PurchaseItemService {
    private purchaseItemRepo;
    findOnePurchaseItem(Id: string): Promise<any>;
    createPurchaseItem(purchaseItemVo: PurchaseItemVo): Promise<import("typeorm").InsertResult>;
    updateaPurchaseItem(Id: string, user_id: string, purchaseItemVo: PurchaseItemVo): Promise<import("typeorm").UpdateResult>;
    removePurchaseItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getPurchaseItemById(id: string): Promise<any>;
    getPurchaseItem(search: PurchaseItemSearchVo): Promise<any[]>;
    getPurchaseItemAll(search: PurchaseItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPurchaseItemAllView(): Promise<any[]>;
}
