import { FHQuotationSearchVo, QuotationSearchVo, QuotationVo } from '../myvo/QuotationVo';
export declare class QuotationRepo {
    private quotationItemRepo;
    create(accountTagVo: QuotationVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: QuotationVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getquotationsById(id: string): Promise<any>;
    getquotationAll(search: QuotationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getquotationAllView(): Promise<any[]>;
    getquotation(userId: string, search: QuotationSearchVo): Promise<any[]>;
    getquotationSQL(userId: string, search: FHQuotationSearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getquotationSQLList(userId: string, search: QuotationSearchVo): Promise<any[]>;
}
