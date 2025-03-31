import { StockValuationLayerSearchVo, StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
export declare class StockValuationLayerService {
    private stockValuationLayerRepo;
    findOneStockValuationLayer(Id: string): Promise<any>;
    createStockValuationLayer(stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").InsertResult>;
    updateaStockValuationLayer(Id: string, user_id: string, stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").UpdateResult>;
    removeStockValuationLayer(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStockValuationLayerById(id: string): Promise<any>;
    getStockValuationLayerList(search: StockValuationLayerSearchVo): Promise<any[]>;
    getStockValuationLayerAll(): Promise<any[]>;
    getStockValuationLayerAllView(): Promise<any[]>;
}
