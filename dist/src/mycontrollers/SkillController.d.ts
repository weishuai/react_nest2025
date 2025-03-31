import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';
export declare class SkillController {
    private skillService;
    createSkill(SkillVo: SkillVo): Promise<import("typeorm").InsertResult>;
    updateaSkill(userToken: string, Id: string, SkillVo: SkillVo): Promise<import("typeorm").UpdateResult>;
    removeSkill(Id: string): Promise<import("typeorm").UpdateResult>;
    getSkillById(Id: string): Promise<any>;
    getSkill(search: SkillSearchVo): Promise<any[]>;
    getSkillAll(search: SkillSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getSkillAllView(): Promise<any[]>;
}
