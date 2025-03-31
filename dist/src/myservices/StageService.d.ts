import { StageSearchVo, StageVo } from '../myvo/StageVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class StageService {
    private stageRepo;
    findOneStage(Id: string): Promise<any>;
    createStage(stageVo: StageVo): Promise<import("typeorm").InsertResult>;
    updateaStage(Id: string, user_id: string, stageVo: StageVo): Promise<import("typeorm").UpdateResult>;
    removeStage(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStageById(id: string): Promise<any>;
    getStage(search: StageSearchVo): Promise<any[]>;
    getStageAll(search: StageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStageAllView(): Promise<any[]>;
}
