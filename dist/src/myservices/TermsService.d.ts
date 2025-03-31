import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TermsService {
    private TermsRepo;
    findOneTerms(Id: string): Promise<any>;
    createTerms(TermsVo: TermsVo): Promise<import("typeorm").InsertResult>;
    updateaTerms(Id: string, user_id: string, termsVo: TermsVo): Promise<import("typeorm").UpdateResult>;
    removeTerms(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTermsById(id: string): Promise<any>;
    getTerms(search: TermsSearchVo): Promise<any[]>;
    getTermsAll(search: TermsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermsAllView(): Promise<{
        fhok: any[];
    }>;
}
