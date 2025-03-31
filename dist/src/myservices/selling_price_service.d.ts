import { SellingPriceSearchVo, SellingPriceVo } from '../myvo/selling_price_vo';
export declare class SellingPriceService {
    private sellingPriceRepo;
    findOneSellingPrice(Id: string): Promise<any>;
    createSellingPrice(sellingPriceVo: SellingPriceVo): Promise<import("typeorm").InsertResult>;
    updateaSellingPrice(Id: string, user_id: string, sellingPriceVo: SellingPriceVo): Promise<import("typeorm").UpdateResult>;
    removeSellingPrice(Ids: string): Promise<import("typeorm").UpdateResult>;
    getSellingPriceById(id: string): Promise<any>;
    getSellingPriceList(search: SellingPriceSearchVo): Promise<any[]>;
    getSellingPriceAll(): Promise<any[]>;
    getSellingPriceAllView(): Promise<any[]>;
}
