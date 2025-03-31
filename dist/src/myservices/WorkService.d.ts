import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class WorkService {
    private workRepo;
    private workItemRepo;
    private customizationRepo;
    private workNoteRepo;
    findOneWork(Id: string): Promise<any>;
    createWork(workVo: WorkVo): Promise<import("typeorm").InsertResult>;
    updateaWork(Id: string, user_id: string, workVo: WorkVo): Promise<import("typeorm").UpdateResult>;
    removeWork(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWorkById(id: string): Promise<any>;
    getWork(userId: string, search: WorkSearchVo): Promise<any[]>;
    getWorkAPP(userId: string, search: WorkSearchVo): Promise<any[]>;
    getWorkAll(search: WorkSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkAllView(): Promise<any[]>;
    getWorkOrderBySqlStartDate(SqlStartDate: string): Promise<any[]>;
}
