import { StockQuantSearchVo, StockQuantVo } from '../myvo/stock_quant_vo';
export declare class StockQuantService {
    private stockQuantRepo;
    findOneStockQuant(Id: string): Promise<any>;
    createStockQuant(stockQuantVo: StockQuantVo): Promise<import("typeorm").InsertResult>;
    updateaStockQuant(Id: string, user_id: string, stockQuantVo: StockQuantVo): Promise<import("typeorm").UpdateResult>;
    removeStockQuant(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStockQuantById(id: string): Promise<any>;
    getStockQuantList(search: StockQuantSearchVo): Promise<any[]>;
    getStockQuantAll(): Promise<any[]>;
    getStockQuantAllView(): Promise<any[]>;
}
