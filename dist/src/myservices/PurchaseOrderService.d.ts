import { PurchaseOrderSearchVo, PurchaseOrderVo } from '../myvo/PurchaseOrderVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class PurchaseOrderService {
    private purchaseOrderRepo;
    private purchaseOrdertemRepo;
    private customizationRepo;
    findOnePurchaseOrder(Id: string): Promise<any>;
    createPurchaseOrder(purchaseOrderVo: PurchaseOrderVo): Promise<import("typeorm").InsertResult>;
    updateaPurchaseOrder(Id: string, user_id: string, purchaseOrderVo: PurchaseOrderVo): Promise<import("typeorm").UpdateResult>;
    removePurchaseOrder(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getPurchaseOrderById(id: string): Promise<any>;
    getPurchaseOrder(userId: string, search: PurchaseOrderSearchVo): Promise<any[]>;
    getPurchaseOrderAll(search: PurchaseOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPurchaseOrderAllView(): Promise<any[]>;
}
