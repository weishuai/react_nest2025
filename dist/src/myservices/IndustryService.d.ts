import { IndustrySearchVo, IndustryVo } from '../myvo/IndustryVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class IndustryService {
    private industryRepo;
    findOneindustry(Id: string): Promise<any>;
    createIndustry(industryVo: IndustryVo): Promise<import("typeorm").InsertResult>;
    updateaIndustry(Id: string, user_id: string, industryVo: IndustryVo): Promise<import("typeorm").UpdateResult>;
    removeIndustry(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getIndustryById(id: string): Promise<any>;
    getIndustry(search: IndustrySearchVo): Promise<any[]>;
    getIndustryAll(search: IndustrySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getIndustryAllView(): Promise<any[]>;
}
