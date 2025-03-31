import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TermsMemberService {
    private termsMemberRepo;
    findOneTermsMember(Id: string): Promise<any>;
    createTermsMember(termsMemberVo: TermsMemberVo): Promise<import("typeorm").InsertResult>;
    updateaTermsMember(Id: string, user_id: string, termsMemberVo: TermsMemberVo): Promise<import("typeorm").UpdateResult>;
    removeTermsMember(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTermsMemberById(id: string): Promise<any>;
    getTermsMember(search: TermsMemberSearchVo): Promise<any[]>;
    getTermsMemberAll(search: TermsMemberSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermsMemberAllView(): Promise<any[]>;
}
