import { StageSearchVo, StageVo } from '../myvo/StageVo';
export declare class StageController {
    private stageService;
    createStage(StageVo: StageVo): Promise<import("typeorm").InsertResult>;
    updateaStage(userToken: string, Id: string, StageVo: StageVo): Promise<import("typeorm").UpdateResult>;
    removeStage(Id: string): Promise<import("typeorm").UpdateResult>;
    getStageById(Id: string): Promise<any>;
    getStage(search: StageSearchVo): Promise<any[]>;
    getStageAll(search: StageSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStageAllView(): Promise<any[]>;
}
