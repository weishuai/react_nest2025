import { QuotationItemSearchVo, QuotationItemVo } from '../myvo/QuotationItemVo';
import { QuotationItem } from '../myentities';
export declare class QuotationItemRepo {
    create(accountTagVo: QuotationItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: QuotationItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateQuotationItemsVoByMid(mid: string, id: string): Promise<string>;
    getQuotationItemsAllByMid(mid: string): Promise<any[]>;
    getQuotationItemsById(id: string): Promise<any>;
    getQuotationItemAll(search: QuotationItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getQuotationItemAllView(): Promise<any[]>;
    getQuotationItem(search: QuotationItemSearchVo): Promise<any[]>;
    getQuotationItemByid(name: string): Promise<QuotationItem>;
}
