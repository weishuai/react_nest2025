import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';
export declare class PaymentTermRepo {
    create(accountTagVo: PaymentTermVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: PaymentTermVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getPaymentTermsById(id: string): Promise<any>;
    getPaymentTermAll(search: PaymentTermSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getPaymentTermAllView(): Promise<any[]>;
    getPaymentTerm(search: PaymentTermSearchVo): Promise<any[]>;
}
