import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';
export declare class JobItemController {
    private jobItemService;
    createJobItem(JobItemVo: JobItemVo): Promise<import("typeorm").InsertResult>;
    updateJobItemVoByMid(mid: string, Id: string): Promise<string>;
    updateaJobItem(userToken: string, Id: string, JobItemVo: JobItemVo): Promise<import("typeorm").UpdateResult>;
    removeJobItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getJobItemById(Id: string): Promise<any>;
    getJobItem(search: JobItemSearchVo): Promise<any[]>;
    getJobItemAPP(search: JobItemSearchVo): Promise<any[]>;
    getJobItemAll(search: JobItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobItemAllView(): Promise<any[]>;
}
