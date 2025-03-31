import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';
export declare class DeliveryItemController {
    private deliveryItemService;
    createDeliveryItem(DeliveryItemVo: DeliveryItemVo): Promise<import("typeorm").InsertResult>;
    updateaDeliveryItem(userToken: string, Id: string, DeliveryItemVo: DeliveryItemVo): Promise<import("typeorm").UpdateResult>;
    removeDeliveryItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getDeliveryItemById(Id: string): Promise<any>;
    getDeliveryItem(search: DeliveryItemSearchVo): Promise<any[]>;
    getDeliveryItemAll(search: DeliveryItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getDeliveryItemAllView(): Promise<any[]>;
}
