import { PurchaseOrderSearchVo, PurchaseOrderVo } from '../myvo/PurchaseOrderVo';
export declare class PurchaseOrderRepo {
    create(accountTagVo: PurchaseOrderVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: PurchaseOrderVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getpurchaseOrdersById(id: string): Promise<any>;
    getpurchaseOrderAll(search: PurchaseOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getpurchaseOrderAllView(): Promise<any[]>;
    getpurchaseOrder(userId: string, search: PurchaseOrderSearchVo): Promise<any[]>;
}
