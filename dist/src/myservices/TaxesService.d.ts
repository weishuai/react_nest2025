import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class TaxesService {
    private taxesRepo;
    findOneTaxes(Id: string): Promise<any>;
    createTaxes(taxesVo: TaxesVo): Promise<import("typeorm").InsertResult>;
    updateaTaxes(Id: string, user_id: string, taxesVo: TaxesVo): Promise<import("typeorm").UpdateResult>;
    removeTaxes(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTaxesById(id: string): Promise<any>;
    getTaxes(search: TaxesSearchVo): Promise<any[]>;
    getTaxesAll(search: TaxesSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaxesAllView(): Promise<{
        fhok: any[];
    }>;
}
