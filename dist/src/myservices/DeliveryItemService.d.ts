import { DeliveryItemSearchVo, DeliveryItemVo } from '../myvo/DeliveryItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class DeliveryItemService {
    private deliveryItemRepo;
    findOneDeliveryItem(Id: string): Promise<any>;
    createDeliveryItem(deliveryItemVo: DeliveryItemVo): Promise<import("typeorm").InsertResult>;
    updateaDeliveryItem(Id: string, user_id: string, deliveryItemVo: DeliveryItemVo): Promise<import("typeorm").UpdateResult>;
    removeDeliveryItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getDeliveryItemById(id: string): Promise<any>;
    getDeliveryItem(search: DeliveryItemSearchVo): Promise<any[]>;
    getDeliveryItemAll(search: DeliveryItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getDeliveryItemAllView(): Promise<any[]>;
}
