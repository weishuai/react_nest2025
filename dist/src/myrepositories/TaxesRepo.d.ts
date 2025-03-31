import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';
export declare class TaxesRepo {
    create(accountTagVo: TaxesVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: TaxesVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTaxessById(id: string): Promise<any>;
    getTaxesAll(search: TaxesSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaxesAllView(): Promise<{
        fhok: any[];
    }>;
    getTaxes(search: TaxesSearchVo): Promise<any[]>;
}
