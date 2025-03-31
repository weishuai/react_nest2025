import { QuotationItemSearchVo, QuotationItemVo } from '../myvo/QuotationItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class QuotationItemService {
    private quotationItemRepo;
    findOneQuotationItem(Id: string): Promise<any>;
    createQuotationItem(quotationItemVo: QuotationItemVo): Promise<import("typeorm").InsertResult>;
    updateaQuotationItem(Id: string, user_id: string, quotationItemVo: QuotationItemVo): Promise<import("typeorm").UpdateResult>;
    removeQuotationItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQuotationItemById(id: string): Promise<any>;
    getQuotationItemsAllByMid(mid: string): Promise<any[]>;
    getQuotationItem(search: QuotationItemSearchVo): Promise<any[]>;
    getQuotationItemAll(search: QuotationItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationItemAllView(): Promise<any[]>;
}
