import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';
export declare class InvoiceItemController {
    private invoiceItemService;
    createInvoiceItem(InvoiceItemVo: InvoiceItemVo): Promise<import("typeorm").InsertResult>;
    updateaInvoiceItem(userToken: string, Id: string, InvoiceItemVo: InvoiceItemVo): Promise<import("typeorm").UpdateResult>;
    removeInvoiceItem(Id: string): Promise<import("typeorm").UpdateResult>;
    removeToInvoiceItem(Id: string): Promise<string>;
    getInvoiceItemById(Id: string): Promise<any>;
    getInvoiceItem(search: InvoiceItemSearchVo): Promise<any[]>;
    getInvoiceItemAll(search: InvoiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoiceItemAllView(): Promise<any[]>;
}
