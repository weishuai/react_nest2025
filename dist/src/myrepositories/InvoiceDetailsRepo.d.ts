import { InvoiceDetailsSearchVo, InvoiceDetailsVo } from '../myvo/InvoiceDetailsVo';
export declare class InvoiceDetailsRepo {
    create(accountTagVo: InvoiceDetailsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: InvoiceDetailsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getinvoiceDetailsAllBydueDate(): Promise<any[]>;
    getinvoiceDetailssById(id: string): Promise<any>;
    getInvoiceDetailsById(id: string): Promise<any>;
    getinvoiceDetailsAll(search: InvoiceDetailsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getinvoiceDetailsAllView(): Promise<{
        fhok: any[];
    }>;
    getinvoiceDetails(userId: string, search: InvoiceDetailsSearchVo): Promise<any[]>;
}
