import { FHQuotationSearchVo, QuotationSearchVo, QuotationVo } from '../myvo/QuotationVo';
export declare class QuotationController {
    private quotationService;
    createQuotation(QuotationVo: QuotationVo): Promise<import("typeorm").InsertResult>;
    updateaQuotation(userToken: string, Id: string, QuotationVo: QuotationVo): Promise<import("typeorm").UpdateResult>;
    removeQuotation(Id: string): Promise<import("typeorm").UpdateResult>;
    getQuotationById(Id: string): Promise<any>;
    getQuotation(userToken: string, search: QuotationSearchVo): Promise<any[]>;
    getQuotationSQL(userToken: string, search: FHQuotationSearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getquotationSQLList(userToken: string, search: QuotationSearchVo): Promise<any[]>;
    getQuotationAll(search: QuotationSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationAllView(): Promise<any[]>;
}
