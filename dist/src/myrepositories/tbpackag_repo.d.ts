import { TbpackagSearchVo, TbpackagVo } from '../myvo/tbpackag_vo';
export declare class TbpackagRepo {
    create(tbpackagVo: TbpackagVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, tbpackagVo: TbpackagVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTbpackagsById(id: string): Promise<any>;
    getTbpackagAll(): Promise<any[]>;
    getTbpackagAllView(): Promise<any[]>;
    getTbpackagList(search: TbpackagSearchVo): Promise<any[]>;
}
