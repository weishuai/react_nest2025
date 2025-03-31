import { InvoiceDetailsSearchVo, InvoiceDetailsVo } from '../myvo/InvoiceDetailsVo';
export declare class InvoiceDetailsController {
    private invoiceDetailsService;
    createInvoiceDetails(InvoiceDetailsVo: InvoiceDetailsVo): Promise<import("typeorm").InsertResult>;
    updateaInvoiceDetails(userToken: string, Id: string, InvoiceDetailsVo: InvoiceDetailsVo): Promise<import("typeorm").UpdateResult>;
    removeInvoiceDetails(Id: string): Promise<import("typeorm").UpdateResult>;
    getInvoiceDetailsById(Id: string): Promise<any>;
    getInvoiceDetails(userToken: string, search: InvoiceDetailsSearchVo): Promise<any[]>;
    getInvoiceDetailsAll(search: InvoiceDetailsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoiceDetailsAllView(): Promise<{
        fhok: any[];
    }>;
}
