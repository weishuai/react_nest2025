import { JobItemSearchVo, JobItemVo } from '../myvo/JobItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class JobItemService {
    private jobItemRepo;
    findOneJobItem(Id: string): Promise<any>;
    createJobItem(jobItemVo: JobItemVo): Promise<import("typeorm").InsertResult>;
    updateaJobItem(Id: string, user_id: string, jobItemVo: JobItemVo): Promise<import("typeorm").UpdateResult>;
    removeJobItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    updateJobItemVoByMid(mid: string, id: string): Promise<string>;
    getJobItemById(id: string): Promise<any>;
    getJobItem(search: JobItemSearchVo): Promise<any[]>;
    getJobItemAPP(search: JobItemSearchVo): Promise<any[]>;
    getJobItemAll(search: JobItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobItemAllView(): Promise<any[]>;
}
