import { UnitSearchVo, UnitVo } from '../myvo/UnitVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class UnitService {
    private unitRepo;
    findOneUnit(Id: string): Promise<any>;
    createUnit(unitVo: UnitVo): Promise<import("typeorm").InsertResult>;
    updateaUnit(Id: string, user_id: string, unitVo: UnitVo): Promise<import("typeorm").UpdateResult>;
    removeUnit(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getUnitById(id: string): Promise<any>;
    getUnit(search: UnitSearchVo): Promise<any[]>;
    getUnitAll(search: UnitSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getUnitAllView(): Promise<{
        fhok: any[];
    }>;
}
