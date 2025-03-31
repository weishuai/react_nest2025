import { TaxesSearchVo, TaxesVo } from '../myvo/TaxesVo';
export declare class TaxesController {
    private taxesService;
    createTaxes(TaxesVo: TaxesVo): Promise<import("typeorm").InsertResult>;
    updateaTaxes(userToken: string, Id: string, TaxesVo: TaxesVo): Promise<import("typeorm").UpdateResult>;
    removeTaxes(Id: string): Promise<import("typeorm").UpdateResult>;
    getTaxesById(Id: string): Promise<any>;
    getTaxes(search: TaxesSearchVo): Promise<any[]>;
    getTaxesAll(search: TaxesSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getTaxesAllView(): Promise<{
        fhok: any[];
    }>;
}
