import { TermConditionSearchVo, TermConditionVo } from '../myvo/TermConditionVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TermConditionService {
    private termConditionRepo;
    findOneTermCondition(Id: string): Promise<any>;
    createTermCondition(termConditionVo: TermConditionVo): Promise<import("typeorm").InsertResult>;
    updateaTermCondition(Id: string, user_id: string, termConditionVo: TermConditionVo): Promise<import("typeorm").UpdateResult>;
    removeTermCondition(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTermConditionById(id: string): Promise<any>;
    getTermCondition(search: TermConditionSearchVo): Promise<any[]>;
    getTermConditionAll(search: TermConditionSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermConditionAllView(): Promise<{
        fhok: any[];
    }>;
}
