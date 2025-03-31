import { SellingPriceVo } from '../myvo/selling_price_vo';
export declare class SellingPriceController {
    private sellingPriceService;
    createSellingPrice(sellingPriceVo: SellingPriceVo): Promise<import("typeorm").InsertResult>;
    updateaSellingPrice(userToken: string, Id: string, sellingPriceVo: SellingPriceVo): Promise<import("typeorm").UpdateResult>;
    removeSellingPrice(Id: string): Promise<import("typeorm").UpdateResult>;
    getSellingPriceById(Id: string): Promise<any>;
    getSellingPriceList(query: any): Promise<any[]>;
    getSellingPriceAll(): Promise<any[]>;
    getSellingPriceAllView(): Promise<any[]>;
}
