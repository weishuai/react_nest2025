import { BatchSearchVo, BatchVo } from '../myvo/batch_vo';
export declare class BatchRepo {
    create(batchVo: BatchVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, batchVo: BatchVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getBatchsById(id: string): Promise<any>;
    getBatchAll(): Promise<any[]>;
    getBatchAllView(): Promise<any[]>;
    getBatchList(search: BatchSearchVo): Promise<any[]>;
}
