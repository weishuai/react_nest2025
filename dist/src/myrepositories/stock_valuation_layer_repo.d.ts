import { StockValuationLayerSearchVo, StockValuationLayerVo } from '../myvo/stock_valuation_layer_vo';
export declare class StockValuationLayerRepo {
    create(stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, stockValuationLayerVo: StockValuationLayerVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStockValuationLayersById(id: string): Promise<any>;
    getStockValuationLayerAll(): Promise<any[]>;
    getStockValuationLayerAllView(): Promise<any[]>;
    getStockValuationLayerList(search: StockValuationLayerSearchVo): Promise<any[]>;
}
