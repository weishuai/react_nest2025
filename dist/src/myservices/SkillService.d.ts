import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class SkillService {
    private skillRepo;
    findOneSkill(Id: string): Promise<any>;
    createSkill(skillVo: SkillVo): Promise<import("typeorm").InsertResult>;
    updateaSkill(Id: string, user_id: string, skillVo: SkillVo): Promise<import("typeorm").UpdateResult>;
    removeSkill(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getSkillById(id: string): Promise<any>;
    getSkill(search: SkillSearchVo): Promise<any[]>;
    getSkillAll(search: SkillSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getSkillAllView(): Promise<any[]>;
}
