import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';
export declare class DeliveryItemRepo {
    create(accountTagVo: DeliveryItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: DeliveryItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updatedeliveryItemVoByMid(mid: string, id: string): Promise<string>;
    getdeliveryItemAllByMid(mid: string): Promise<any[]>;
    getdeliveryItemsById(id: string): Promise<any>;
    getdeliveryItemAll(search: DeliveryItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getdeliveryItemAllView(): Promise<any[]>;
    getdeliveryItem(search: DeliveryItemSearchVo): Promise<any[]>;
}
