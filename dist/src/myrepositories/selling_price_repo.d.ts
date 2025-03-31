import { SellingPriceSearchVo, SellingPriceVo } from '../myvo/selling_price_vo';
export declare class SellingPriceRepo {
    create(sellingPriceVo: SellingPriceVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, sellingPriceVo: SellingPriceVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getSellingPricesById(id: string): Promise<any>;
    getSellingPriceAll(): Promise<any[]>;
    getSellingPriceAllView(): Promise<any[]>;
    getSellingPriceList(search: SellingPriceSearchVo): Promise<any[]>;
}
