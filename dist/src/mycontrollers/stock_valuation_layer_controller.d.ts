import { StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
export declare class StockValuationLayerController {
    private stockValuationLayerService;
    createStockValuationLayer(stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").InsertResult>;
    updateaStockValuationLayer(userToken: string, Id: string, stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").UpdateResult>;
    removeStockValuationLayer(Id: string): Promise<import("typeorm").UpdateResult>;
    getStockValuationLayerById(Id: string): Promise<any>;
    getStockValuationLayerList(query: any): Promise<any[]>;
    getStockValuationLayerAll(): Promise<any[]>;
    getStockValuationLayerAllView(): Promise<any[]>;
}
