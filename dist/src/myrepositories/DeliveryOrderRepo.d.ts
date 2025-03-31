import { DeliveryOrderSearchVo, DeliveryOrderVo } from '../myvo/DeliveryOrderVo';
export declare class DeliveryOrderRepo {
    create(accountTagVo: DeliveryOrderVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: DeliveryOrderVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getdeliveryOrdersById(id: string): Promise<any>;
    getdeliveryOrderAll(search: DeliveryOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getdeliveryOrderAllView(): Promise<any[]>;
    getdeliveryOrder(userId: string, search: DeliveryOrderSearchVo): Promise<any[]>;
}
