import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class InvoiceItemService {
    private invoiceItemRepo;
    findOneInvoiceItem(Id: string): Promise<any>;
    createInvoiceItem(invoiceItemVo: InvoiceItemVo): Promise<import("typeorm").InsertResult>;
    updateaInvoiceItem(Id: string, user_id: string, invoiceItemVo: InvoiceItemVo): Promise<import("typeorm").UpdateResult>;
    removeInvoiceItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    removeToInvoiceItem(Id: string): Promise<string>;
    getInvoiceItemById(id: string): Promise<any>;
    getInvoiceItem(search: InvoiceItemSearchVo): Promise<any[]>;
    getInvoiceItemAll(search: InvoiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getInvoiceItemAllView(): Promise<any[]>;
}
