import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';
export declare class TemplateRepo {
    create(accountTagVo: TemplateVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TemplateVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    gettemplatesById(id: string): Promise<any>;
    gettemplateAll(search: TemplateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    gettemplateAllView(): Promise<any[]>;
    gettemplate(search: TemplateSearchVo): Promise<any[]>;
}
