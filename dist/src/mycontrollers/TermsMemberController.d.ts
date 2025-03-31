import { TermsMemberSearchVo, TermsMemberVo } from '../myvo/TermsMemberVo';
export declare class TermsMemberController {
    private termsMemberService;
    createTermsMember(termsMemberVo: TermsMemberVo): Promise<import("typeorm").InsertResult>;
    updateaTermsMember(userToken: string, Id: string, TermsMemberVo: TermsMemberVo): Promise<import("typeorm").UpdateResult>;
    removeTermsMember(Id: string): Promise<import("typeorm").UpdateResult>;
    getTermsMemberById(Id: string): Promise<any>;
    getTermsMember(search: TermsMemberSearchVo): Promise<any[]>;
    getTermsMemberAll(search: TermsMemberSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermsMemberAllView(): Promise<any[]>;
}
