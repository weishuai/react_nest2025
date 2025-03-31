import { TemplateSearchVo, TemplateVo } from '../myvo/TemplateVo';
export declare class TemplateController {
    private TemplateService;
    createTemplate(TemplateVo: TemplateVo): Promise<import("typeorm").InsertResult>;
    updateaTemplate(userToken: string, Id: string, TemplateVo: TemplateVo): Promise<import("typeorm").UpdateResult>;
    removeTemplate(Id: string): Promise<import("typeorm").UpdateResult>;
    getTemplateById(Id: string): Promise<any>;
    getTemplate(search: TemplateSearchVo): Promise<any[]>;
    getTemplateAll(search: TemplateSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTemplateAllView(): Promise<any[]>;
}
