import { DeliveryOrderSearchVo, DeliveryOrderVo } from '../myvo/DeliveryOrderVo';
export declare class DeliveryOrderController {
    private deliveryOrderService;
    createDeliveryOrder(DeliveryOrderVo: DeliveryOrderVo): Promise<import("typeorm").InsertResult>;
    updateaDeliveryOrder(userToken: string, Id: string, DeliveryOrderVo: DeliveryOrderVo): Promise<import("typeorm").UpdateResult>;
    removeDeliveryOrder(Id: string): Promise<import("typeorm").UpdateResult>;
    getDeliveryOrderById(Id: string): Promise<any>;
    getDeliveryOrder(userToken: string, search: DeliveryOrderSearchVo): Promise<any[]>;
    getDeliveryOrderAll(search: DeliveryOrderSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getDeliveryOrderAllView(): Promise<any[]>;
}
