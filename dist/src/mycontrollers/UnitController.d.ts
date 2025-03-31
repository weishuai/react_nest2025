import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';
export declare class UnitController {
    private unitService;
    createUnit(UnitVo: UnitVo): Promise<import("typeorm").InsertResult>;
    updateaUnit(userToken: string, Id: string, UnitVo: UnitVo): Promise<import("typeorm").UpdateResult>;
    removeUnit(Id: string): Promise<import("typeorm").UpdateResult>;
    getUnitById(Id: string): Promise<any>;
    getUnit(search: UnitSearchVo): Promise<any[]>;
    getUnitAll(search: UnitSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getUnitAllView(): Promise<{
        fhok: any[];
    }>;
}
