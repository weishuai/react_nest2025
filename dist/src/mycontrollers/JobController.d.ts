import { JobSearchVo, JobVo } from '../myvo/JobVo';
export declare class JobController {
    private jobService;
    createJob(JobVo: JobVo): Promise<import("typeorm").InsertResult>;
    updateaJob(userToken: string, Id: string, JobVo: JobVo): Promise<import("typeorm").UpdateResult>;
    removeJob(Id: string): Promise<import("typeorm").UpdateResult>;
    getJobById(Id: string): Promise<any>;
    getJob(userToken: string, search: JobSearchVo): Promise<any[]>;
    getJobAll(search: JobSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobAllView(): Promise<{
        fhok: any[];
    }>;
}
