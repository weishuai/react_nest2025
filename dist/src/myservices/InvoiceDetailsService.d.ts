import { InvoiceDetailsSearchVo, InvoiceDetailsVo } from '../myvo/InvoiceDetailsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class InvoiceDetailsService {
    private invoiceDetailsRepo;
    private customizationRepo;
    private invoiceItemRepo;
    private invoicePaymentRepo;
    findOneInvoiceDetails(Id: string): Promise<any>;
    createInvoiceDetails(invoiceDetailsVo: InvoiceDetailsVo): Promise<import("typeorm").InsertResult>;
    updateaInvoiceDetails(Id: string, user_id: string, invoiceDetailsVo: InvoiceDetailsVo): Promise<import("typeorm").UpdateResult>;
    removeInvoiceDetails(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    isAlertInvoiceDetails(): Promise<void>;
    getInvoiceDetailsById(id: string): Promise<any>;
    getInvoiceDetails(userId: string, search: InvoiceDetailsSearchVo): Promise<any[]>;
    getInvoiceDetailsAll(search: InvoiceDetailsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoiceDetailsAllView(): Promise<{
        fhok: any[];
    }>;
}
