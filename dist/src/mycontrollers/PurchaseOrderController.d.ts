import { PurchaseOrderSearchVo, PurchaseOrderVo } from '../myvo/PurchaseOrderVo';
export declare class PurchaseOrderController {
    private purchaseOrderService;
    createPurchaseOrder(PurchaseOrderVo: PurchaseOrderVo): Promise<import("typeorm").InsertResult>;
    updateaPurchaseOrder(userToken: string, Id: string, PurchaseOrderVo: PurchaseOrderVo): Promise<import("typeorm").UpdateResult>;
    removePurchaseOrder(Id: string): Promise<import("typeorm").UpdateResult>;
    getPurchaseOrderById(Id: string): Promise<any>;
    getPurchaseOrder(userToken: string, search: PurchaseOrderSearchVo): Promise<any[]>;
    getPurchaseOrderAll(search: PurchaseOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPurchaseOrderAllView(): Promise<any[]>;
}
