import { JobSearchVo, JobVo } from '../myvo/JobVo';
export declare class JobRepo {
    create(accountTagVo: JobVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: JobVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getJobsById(id: string): Promise<any>;
    getJobAll(search: JobSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobAllView(): Promise<{
        fhok: any[];
    }>;
    getJob(userId: string, search: JobSearchVo): Promise<any[]>;
}
