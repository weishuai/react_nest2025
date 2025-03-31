import { QuotationItemSearchVo, QuotationItemVo } from '../myvo/QuotationItemVo';
export declare class QuotationItemController {
    private quotationItemService;
    createQuotationItem(QuotationItemVo: QuotationItemVo): Promise<import("typeorm").InsertResult>;
    updateaQuotationItem(userToken: string, Id: string, QuotationItemVo: QuotationItemVo): Promise<import("typeorm").UpdateResult>;
    removeQuotationItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getQuotationItemById(Id: string): Promise<any>;
    getQuotationItemsAllByMid(mid: string): Promise<any[]>;
    getQuotationItem(search: QuotationItemSearchVo): Promise<any[]>;
    getQuotationItemAll(search: QuotationItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationItemAllView(): Promise<any[]>;
}
