import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class PaymentTermService {
    private paymentTermRepo;
    findOnePaymentTerm(Id: string): Promise<any>;
    createPaymentTerm(paymentTermVo: PaymentTermVo): Promise<import("typeorm").InsertResult>;
    updateaPaymentTerm(Id: string, user_id: string, paymentTermVo: PaymentTermVo): Promise<import("typeorm").UpdateResult>;
    removePaymentTerm(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getPaymentTermById(id: string): Promise<any>;
    getPaymentTerm(search: PaymentTermSearchVo): Promise<any[]>;
    getPaymentTermAll(search: PaymentTermSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPaymentTermAllView(): Promise<any[]>;
}
