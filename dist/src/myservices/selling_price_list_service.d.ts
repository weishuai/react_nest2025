import { SellingPriceListSearchVo, SellingPriceListVo } from '../myvo/selling_price_list_vo';
export declare class SellingPriceListService {
    private sellingPriceListRepo;
    findOneSellingPriceList(Id: string): Promise<any>;
    createSellingPriceList(sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").InsertResult>;
    updateaSellingPriceList(Id: string, user_id: string, sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").UpdateResult>;
    removeSellingPriceList(Ids: string): Promise<import("typeorm").UpdateResult>;
    getSellingPriceListById(id: string): Promise<any>;
    getSellingPriceListList(search: SellingPriceListSearchVo): Promise<any[]>;
    getSellingPriceListAll(): Promise<any[]>;
    getSellingPriceListAllView(): Promise<any[]>;
}
