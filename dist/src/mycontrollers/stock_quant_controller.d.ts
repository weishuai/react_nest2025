import { StockQuantVo } from '../myvo/stock_quant_vo';
export declare class StockQuantController {
    private stockQuantService;
    createStockQuant(stockQuantVo: StockQuantVo): Promise<import("typeorm").InsertResult>;
    updateaStockQuant(userToken: string, Id: string, stockQuantVo: StockQuantVo): Promise<import("typeorm").UpdateResult>;
    removeStockQuant(Id: string): Promise<import("typeorm").UpdateResult>;
    getStockQuantById(Id: string): Promise<any>;
    getStockQuantList(query: any): Promise<any[]>;
    getStockQuantAll(): Promise<any[]>;
    getStockQuantAllView(): Promise<any[]>;
}
