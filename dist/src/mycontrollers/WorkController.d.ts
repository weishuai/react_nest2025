import { WorkSearchVo, WorkVo } from '../myvo/WorkVo';
export declare class WorkController {
    private workService;
    createWork(WorkVo: WorkVo): Promise<import("typeorm").InsertResult>;
    updateaWork(userToken: string, Id: string, WorkVo: WorkVo): Promise<import("typeorm").UpdateResult>;
    removeWork(Id: string): Promise<import("typeorm").UpdateResult>;
    getWorkById(Id: string): Promise<any>;
    getWorkOrderBySqlStartDate(SqlStartDate: string): Promise<any[]>;
    getWork(userToken: string, search: WorkSearchVo): Promise<any[]>;
    getWorkAPP(userToken: string, search: WorkSearchVo): Promise<any[]>;
    getWorkAll(search: WorkSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWorkAllView(): Promise<any[]>;
}
