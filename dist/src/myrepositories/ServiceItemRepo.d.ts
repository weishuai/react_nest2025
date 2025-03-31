import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';
export declare class ServiceItemRepo {
    create(accountTagVo: ServiceItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ServiceItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateServiceItemByMid(mid: string, id: string): Promise<string>;
    getServiceItemAllByMid(mid: string): Promise<any[]>;
    getServiceItemsById(id: string): Promise<any>;
    getServiceItemAll(search: ServiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getServiceItemAllView(): Promise<any[]>;
    getServiceItem(search: ServiceItemSearchVo): Promise<any[]>;
}
