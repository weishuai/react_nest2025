import { SkillSearchVo, SkillVo } from '../myvo/SkillVo';
export declare class SkillRepo {
    create(accountTagVo: SkillVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: SkillVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getSkillsById(id: string): Promise<any>;
    getSkillAll(search: SkillSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getSkillAllView(): Promise<any[]>;
    getSkill(search: SkillSearchVo): Promise<any[]>;
}
