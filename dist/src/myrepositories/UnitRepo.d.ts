import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';
export declare class UnitRepo {
    create(accountTagVo: UnitVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: UnitVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getUnitsById(id: string): Promise<any>;
    getUnitAll(search: UnitSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getUnitAllView(): Promise<{
        fhok: any[];
    }>;
    getUnit(search: UnitSearchVo): Promise<any[]>;
}
