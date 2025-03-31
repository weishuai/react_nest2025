import { ServiceItemSearchVo, ServiceItemVo } from '../myvo/ServiceItemVo';
export declare class ServiceItemController {
    private serviceItemService;
    createServiceItem(ServiceItemVo: ServiceItemVo): Promise<import("typeorm").InsertResult>;
    updateaServiceItem(userToken: string, Id: string, ServiceItemVo: ServiceItemVo): Promise<import("typeorm").UpdateResult>;
    removeServiceItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getServiceItemById(Id: string): Promise<any>;
    getServiceItem(search: ServiceItemSearchVo): Promise<any[]>;
    getServiceItemAll(search: ServiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getServiceItemAllView(): Promise<any[]>;
}
