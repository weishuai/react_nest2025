import { InvoicePaymentSearchVo, InvoicePaymentVo } from '../myvo/InvoicePaymentVo';
export declare class InvoicePaymentRepo {
    create(accountTagVo: InvoicePaymentVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: InvoicePaymentVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateInvoicePaymentVoByMid(mid: string, id: string): Promise<string>;
    getInvoicePaymentAllByMid(mid: string): Promise<any[]>;
    getInvoicePaymentsById(id: string): Promise<any>;
    getinvoicePaymentAll(search: InvoicePaymentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getinvoicePaymentAllView(): Promise<any[]>;
    getinvoicePayment(search: InvoicePaymentSearchVo): Promise<any[]>;
}
