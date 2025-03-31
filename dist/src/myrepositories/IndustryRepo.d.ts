import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';
export declare class IndustryRepo {
    create(accountTagVo: IndustryVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: IndustryVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getIndustryById(id: string): Promise<any>;
    getIndustryAll(search: IndustrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getIndustryAllView(): Promise<any[]>;
    getIndustry(search: IndustrySearchVo): Promise<any[]>;
}
