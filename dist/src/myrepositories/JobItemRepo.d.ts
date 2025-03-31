import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';
export declare class JobItemRepo {
    create(accountTagVo: JobItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: JobItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateJobItemVoByMid(mid: string, id: string): Promise<string>;
    getJobItemAllByMid(mid: string): Promise<any[]>;
    getJobItemsById(id: string): Promise<any>;
    getJobItemAll(search: JobItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobItemAllView(): Promise<any[]>;
    getJobItem(search: JobItemSearchVo): Promise<any[]>;
    getJobItemAPP(search: JobItemSearchVo): Promise<any[]>;
}
