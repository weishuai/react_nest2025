import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';
export declare class TermsController {
    private termsService;
    createTerms(TermsVo: TermsVo): Promise<import("typeorm").InsertResult>;
    updateaTerms(userToken: string, Id: string, TermsVo: TermsVo): Promise<import("typeorm").UpdateResult>;
    removeTerms(Id: string): Promise<import("typeorm").UpdateResult>;
    getTermsById(Id: string): Promise<any>;
    getTerms(search: TermsSearchVo): Promise<any[]>;
    getTermsAll(search: TermsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTermsAllView(): Promise<{
        fhok: any[];
    }>;
}
