import { StockQuantSearchVo, StockQuantVo } from '../myvo/stock_quant_vo';
export declare class StockQuantRepo {
    create(stockQuantVo: StockQuantVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, stockQuantVo: StockQuantVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStockQuantsById(id: string): Promise<any>;
    getStockQuantAll(): Promise<any[]>;
    getStockQuantAllView(): Promise<any[]>;
    getStockQuantList(search: StockQuantSearchVo): Promise<any[]>;
}
