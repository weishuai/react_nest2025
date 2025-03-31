import { DeliveryOrderSearchVo, DeliveryOrderVo } from '../myvo/DeliveryOrderVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class DeliveryOrderService {
    private deliveryOrderRepo;
    private DeliveryItemRepo;
    private customizationRepo;
    findOneDeliveryOrder(Id: string): Promise<any>;
    createDeliveryOrder(deliveryOrderVo: DeliveryOrderVo): Promise<import("typeorm").InsertResult>;
    updateaDeliveryOrder(Id: string, user_id: string, deliveryOrderVo: DeliveryOrderVo): Promise<import("typeorm").UpdateResult>;
    removeDeliveryOrder(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getDeliveryOrderById(id: string): Promise<any>;
    getDeliveryOrder(userId: string, search: DeliveryOrderSearchVo): Promise<any[]>;
    getDeliveryOrderAll(search: DeliveryOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getDeliveryOrderAllView(): Promise<any[]>;
}
