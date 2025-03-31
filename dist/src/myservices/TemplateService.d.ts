import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TemplateService {
    private templateRepo;
    findOneTemplate(Id: string): Promise<any>;
    createTemplate(templateVo: TemplateVo): Promise<import("typeorm").InsertResult>;
    updateaTemplate(Id: string, user_id: string, templateVo: TemplateVo): Promise<import("typeorm").UpdateResult>;
    removeTemplate(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTemplateById(id: string): Promise<any>;
    getTemplate(search: TemplateSearchVo): Promise<any[]>;
    getTemplateAll(search: TemplateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTemplateAllView(): Promise<any[]>;
}
