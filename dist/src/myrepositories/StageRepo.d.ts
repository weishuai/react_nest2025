import { StageSearchVo, StageVo } from '../myvo/StageVo';
export declare class StageRepo {
    create(accountTagVo: StageVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: StageVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStagesById(id: string): Promise<any>;
    getStageAll(search: StageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStageAllView(): Promise<any[]>;
    getStage(search: StageSearchVo): Promise<any[]>;
}
