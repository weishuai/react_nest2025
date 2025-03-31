import { SellingPriceListVo } from '../myvo/selling_price_list_vo';
export declare class SellingPriceListController {
    private sellingPriceListService;
    createSellingPriceList(sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").InsertResult>;
    updateaSellingPriceList(userToken: string, Id: string, sellingPriceListVo: SellingPriceListVo): Promise<import("typeorm").UpdateResult>;
    removeSellingPriceList(Id: string): Promise<import("typeorm").UpdateResult>;
    getSellingPriceListById(Id: string): Promise<any>;
    getSellingPriceListList(query: any): Promise<any[]>;
    getSellingPriceListAll(): Promise<any[]>;
    getSellingPriceListAllView(): Promise<any[]>;
}
