import { QuotationCommentsSearchVo, QuotationCommentsVo } from '../myvo/QuotationCommentsVo';
export declare class QuotationCommentsController {
    private quotationCommentsService;
    createQuotationComments(quotationCommentsVo: QuotationCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaQuotationComments(userToken: string, Id: string, QuotationCommentsVo: QuotationCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeQuotationComments(Id: string): Promise<import("typeorm").UpdateResult>;
    getQuotationCommentsById(Id: string): Promise<any>;
    getQuotationComments(search: QuotationCommentsSearchVo): Promise<any[]>;
    getQuotationCommentsAll(search: QuotationCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationCommentsAllView(): Promise<any[]>;
}
