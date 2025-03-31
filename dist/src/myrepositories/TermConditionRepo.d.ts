import { TermConditionSearchVo, TermConditionVo } from '../myvo/TermConditionVo';
export declare class TermConditionRepo {
    create(accountTagVo: TermConditionVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TermConditionVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTermConditionsById(id: string): Promise<any>;
    getTermConditionAll(search: TermConditionSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermConditionAllView(): Promise<{
        fhok: any[];
    }>;
    getTermCondition(search: TermConditionSearchVo): Promise<any[]>;
}
