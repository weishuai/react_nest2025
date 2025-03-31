import { BatchSearchVo, BatchVo } from '../myvo/batch_vo';
export declare class BatchService {
    private batchRepo;
    findOneBatch(Id: string): Promise<any>;
    createBatch(batchVo: BatchVo): Promise<import("typeorm").InsertResult>;
    updateaBatch(Id: string, user_id: string, batchVo: BatchVo): Promise<import("typeorm").UpdateResult>;
    removeBatch(Ids: string): Promise<import("typeorm").UpdateResult>;
    getBatchById(id: string): Promise<any>;
    getBatchList(search: BatchSearchVo): Promise<any[]>;
    getBatchAll(): Promise<any[]>;
    getBatchAllView(): Promise<any[]>;
}
