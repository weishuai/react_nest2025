import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';
export declare class PaymentTermController {
    private paymentTermService;
    createPaymentTerm(PaymentTermVo: PaymentTermVo): Promise<import("typeorm").InsertResult>;
    updateaPaymentTerm(userToken: string, Id: string, PaymentTermVo: PaymentTermVo): Promise<import("typeorm").UpdateResult>;
    removePaymentTerm(Id: string): Promise<import("typeorm").UpdateResult>;
    getPaymentTermById(Id: string): Promise<any>;
    getPaymentTerm(search: PaymentTermSearchVo): Promise<any[]>;
    getPaymentTermAll(search: PaymentTermSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPaymentTermAllView(): Promise<any[]>;
}
