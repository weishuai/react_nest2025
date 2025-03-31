import { InvoicePaymentSearchVo, InvoicePaymentVo } from '../myvo/InvoicePaymentVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class InvoicePaymentService {
    private invoicePaymentRepo;
    findOneInvoicePayment(Id: string): Promise<any>;
    createInvoicePayment(invoicePaymentVo: InvoicePaymentVo): Promise<import("typeorm").InsertResult>;
    updateaInvoicePayment(Id: string, user_id: string, invoicePaymentVo: InvoicePaymentVo): Promise<import("typeorm").UpdateResult>;
    removeInvoicePayment(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getInvoicePaymentById(id: string): Promise<any>;
    getInvoicePayment(search: InvoicePaymentSearchVo): Promise<any[]>;
    getInvoicePaymentAll(search: InvoicePaymentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoicePaymentAllView(): Promise<any[]>;
}
