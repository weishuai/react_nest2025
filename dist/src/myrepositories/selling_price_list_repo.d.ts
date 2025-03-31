import { SellingPriceListSearchVo, SellingPriceListVo } from '../myvo/selling_price_list_vo';
export declare class SellingPriceListRepo {
    create(sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getSellingPriceListsById(id: string): Promise<any>;
    getSellingPriceListAll(): Promise<any[]>;
    getSellingPriceListAllView(): Promise<any[]>;
    getSellingPriceListList(search: SellingPriceListSearchVo): Promise<any[]>;
}
