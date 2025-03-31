import { FHcrmTable1SearchVo, FHcrmTable1Vo } from '../myvo/fhcrm_table1_vo';
export declare class FHcrmTable1Repo {
    create(fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhcrmTable1Vo: FHcrmTable1Vo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFHcrmTable1sById(id: string): Promise<any>;
    getFHcrmTable1All(search: FHcrmTable1SearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHcrmTable1AllView(): Promise<any[]>;
    getFHcrmTable1List(search: FHcrmTable1SearchVo): Promise<any[]>;
}
