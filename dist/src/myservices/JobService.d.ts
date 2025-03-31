import { JobSearchVo, JobVo } from '../myvo/JobVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class JobService {
    private jobRepo;
    private jobItemRepo;
    findOneJob(Id: string): Promise<any>;
    createJob(jobVo: JobVo): Promise<import("typeorm").InsertResult>;
    updateaJob(Id: string, user_id: string, jobVo: JobVo): Promise<import("typeorm").UpdateResult>;
    removeJob(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getJobById(id: string): Promise<any>;
    getJob(userId: string, search: JobSearchVo): Promise<any[]>;
    getJobAll(search: JobSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getJobAllView(): Promise<{
        fhok: any[];
    }>;
}
