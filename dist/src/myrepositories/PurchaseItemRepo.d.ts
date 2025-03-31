import { PurchaseItemSearchVo, PurchaseItemVo } from '../myvo/PurchaseItemVo';
export declare class PurchaseItemRepo {
    create(accountTagVo: PurchaseItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: PurchaseItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updatepurchaseItemVoByMid(mid: string, id: string): Promise<string>;
    getpurchaseItemAllByMid(mid: string): Promise<any[]>;
    getpurchaseItemsById(id: string): Promise<any>;
    getpurchaseItemAll(search: PurchaseItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getpurchaseItemAllView(): Promise<any[]>;
    getpurchaseItem(search: PurchaseItemSearchVo): Promise<any[]>;
}
