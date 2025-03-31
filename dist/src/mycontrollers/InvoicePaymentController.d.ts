import { InvoicePaymentSearchVo, InvoicePaymentVo } from '../myvo/InvoicePaymentVo';
export declare class InvoicePaymentController {
    private invoicePaymentService;
    createInvoicePayment(InvoicePaymentVo: InvoicePaymentVo): Promise<import("typeorm").InsertResult>;
    updateaInvoicePayment(userToken: string, Id: string, InvoicePaymentVo: InvoicePaymentVo): Promise<import("typeorm").UpdateResult>;
    removeInvoicePayment(Id: string): Promise<import("typeorm").UpdateResult>;
    getInvoicePaymentById(Id: string): Promise<any>;
    getInvoicePayment(search: InvoicePaymentSearchVo): Promise<any[]>;
    getInvoicePaymentAll(search: InvoicePaymentSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoicePaymentAllView(): Promise<any[]>;
}
