import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';
export declare class IndustryController {
    private industryService;
    createIndustry(IndustryVo: IndustryVo): Promise<import("typeorm").InsertResult>;
    updateaIndustry(userToken: string, Id: string, IndustryVo: IndustryVo): Promise<import("typeorm").UpdateResult>;
    removeIndustry(Id: string): Promise<import("typeorm").UpdateResult>;
    getIndustryById(Id: string): Promise<any>;
    getIndustry(search: IndustrySearchVo): Promise<any[]>;
    getIndustryAll(search: IndustrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getIndustryAllView(): Promise<any[]>;
}
