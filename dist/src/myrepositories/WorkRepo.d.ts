import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';
export declare class WorkRepo {
    create(accountTagVo: WorkVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: WorkVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWorksById(id: string): Promise<any>;
    getWorkOrderBySqlStartDate(SqlStartDate: string): Promise<any[]>;
    getWorkAll(search: WorkSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkAllView(): Promise<any[]>;
    getWork(userId: string, search: WorkSearchVo): Promise<any[]>;
    getWorkAPP(assignTo: string, search: WorkSearchVo): Promise<any[]>;
}
