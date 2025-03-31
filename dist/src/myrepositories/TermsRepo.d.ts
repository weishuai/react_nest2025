import { TermsSearchVo, TermsVo } from '../myvo/TermsVo';
export declare class TermsRepo {
    create(accountTagVo: TermsVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TermsVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    gettermssById(id: string): Promise<any>;
    gettermsAll(search: TermsSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    gettermsAllView(): Promise<{
        fhok: any[];
    }>;
    getterms(search: TermsSearchVo): Promise<any[]>;
}
