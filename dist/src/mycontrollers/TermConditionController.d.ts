import { TermConditionSearchVo, TermConditionVo } from '../myvo/TermConditionVo';
export declare class TermConditionController {
    private termConditionService;
    createTermCondition(TermConditionVo: TermConditionVo): Promise<import("typeorm").InsertResult>;
    updateaTermCondition(userToken: string, Id: string, TermConditionVo: TermConditionVo): Promise<import("typeorm").UpdateResult>;
    removeTermCondition(Id: string): Promise<import("typeorm").UpdateResult>;
    getTermConditionById(Id: string): Promise<any>;
    getTermCondition(search: TermConditionSearchVo): Promise<any[]>;
    getTermConditionAll(search: TermConditionSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermConditionAllView(): Promise<{
        fhok: any[];
    }>;
}
