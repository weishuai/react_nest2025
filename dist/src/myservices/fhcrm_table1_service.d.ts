import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
export declare class FHcrmTable1Service {
    private fhcrmTable1Repo;
    findOneFHcrmTable1(Id: string): Promise<any>;
    createFHcrmTable1(fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").InsertResult>;
    updateaFHcrmTable1(Id: string, user_id: string, fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").UpdateResult>;
    removeFHcrmTable1(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFHcrmTable1ById(id: string): Promise<any>;
    getFHcrmTable1List(search: FHcrmTable1SearchVo): Promise<any[]>;
    getFHcrmTable1All(search: FHcrmTable1SearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHcrmTable1AllView(): Promise<any[]>;
}
