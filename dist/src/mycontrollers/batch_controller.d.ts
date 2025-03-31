import { BatchVo } from '../myvo/batch_vo';
export declare class BatchController {
    private batchService;
    createBatch(batchVo: BatchVo): Promise<import("typeorm").InsertResult>;
    updateaBatch(userToken: string, Id: string, batchVo: BatchVo): Promise<import("typeorm").UpdateResult>;
    removeBatch(Id: string): Promise<import("typeorm").UpdateResult>;
    getBatchById(Id: string): Promise<any>;
    getBatchList(query: any): Promise<any[]>;
    getBatchAll(): Promise<any[]>;
    getBatchAllView(): Promise<any[]>;
}
