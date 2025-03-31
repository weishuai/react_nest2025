import { InvoiceItemSearchVo, InvoiceItemVo } from '../myvo/InvoiceItemVo';
export declare class InvoiceItemRepo {
    create(accountTagVo: InvoiceItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: InvoiceItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateInvoiceItemVoByMid(mid: string, id: string): Promise<string>;
    updateToInvoiceItemVoByMid(mid: string): Promise<string>;
    getInvoiceItemAllByMid(mid: string): Promise<any[]>;
    getinvoiceItemsById(id: string): Promise<any>;
    getinvoiceItemAll(search: InvoiceItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getinvoiceItemAllView(): Promise<any[]>;
    getinvoiceItem(search: InvoiceItemSearchVo): Promise<any[]>;
}
