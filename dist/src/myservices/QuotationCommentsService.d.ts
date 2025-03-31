import { QuotationCommentsSearchVo, QuotationCommentsVo } from '../myvo/QuotationCommentsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class QuotationCommentsService {
    private quotationCommentsRepo;
    findOneQuotationComments(Id: string): Promise<any>;
    createQuotationComments(quotationCommentsVo: QuotationCommentsVo): Promise<import("typeorm").InsertResult>;
    updateaQuotationComments(Id: string, user_id: string, quotationCommentsVo: QuotationCommentsVo): Promise<import("typeorm").UpdateResult>;
    removeQuotationComments(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQuotationCommentsById(id: string): Promise<any>;
    getQuotationComments(search: QuotationCommentsSearchVo): Promise<any[]>;
    getQuotationCommentsAll(search: QuotationCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationCommentsAllView(): Promise<any[]>;
}
