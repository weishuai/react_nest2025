import { FhtestSearchVo, FhtestVo } from '../myvo/fhtest_vo';
export declare class FhtestRepo {
    create(fhtestVo: FhtestVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhtestVo: FhtestVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhtestsById(id: string): Promise<any>;
    getFhtestAll(): Promise<any[]>;
    getFhtestAllView(): Promise<any[]>;
    getFhtestList(search: FhtestSearchVo): Promise<any[]>;
}
