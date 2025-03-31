import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ServiceItemService {
    private serviceItemRepo;
    findOneServiceItem(Id: string): Promise<any>;
    createServiceItem(serviceItemVo: ServiceItemVo): Promise<import("typeorm").InsertResult>;
    updateaServiceItem(Id: string, user_id: string, serviceItemVo: ServiceItemVo): Promise<import("typeorm").UpdateResult>;
    removeServiceItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getServiceItemById(id: string): Promise<any>;
    getServiceItem(search: ServiceItemSearchVo): Promise<any[]>;
    getServiceItemAll(search: ServiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getServiceItemAllView(): Promise<any[]>;
}
