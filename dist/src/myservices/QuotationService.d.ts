import { FHQuotationSearchVo, QuotationSearchVo, QuotationVo } from '../myvo/QuotationVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class QuotationService {
    private quotationRepo;
    private quotationItemRepo;
    private customizationRepo;
    findOneQuotation(Id: string): Promise<any>;
    createQuotation(quotationVo: QuotationVo): Promise<import("typeorm").InsertResult>;
    updateaQuotation(Id: string, user_id: string, quotationVo: QuotationVo): Promise<import("typeorm").UpdateResult>;
    removeQuotation(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQuotationById(id: string): Promise<any>;
    getQuotation(userId: string, search: QuotationSearchVo): Promise<any[]>;
    getQuotationSQL(userId: string, search: FHQuotationSearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getquotationSQLList(userId: string, search: QuotationSearchVo): Promise<any[]>;
    getQuotationAll(search: QuotationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationAllView(): Promise<any[]>;
}
