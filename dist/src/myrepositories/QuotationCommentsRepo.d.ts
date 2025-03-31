import { QuotationCommentsSearchVo, QuotationCommentsVo } from '../myvo/QuotationCommentsVo';
export declare class QuotationCommentsRepo {
    create(accountTagVo: QuotationCommentsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: QuotationCommentsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQuotationCommentssById(id: string): Promise<any>;
    getQuotationCommentsAll(search: QuotationCommentsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationCommentsAllView(): Promise<any[]>;
    getQuotationComments(search: QuotationCommentsSearchVo): Promise<any[]>;
}
