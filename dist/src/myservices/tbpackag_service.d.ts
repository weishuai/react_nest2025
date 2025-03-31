import { TbpackagSearchVo, TbpackagVo } from '../myvo/tbpackag_vo';
export declare class TbpackagService {
    private tbpackagRepo;
    findOneTbpackag(Id: string): Promise<any>;
    createTbpackag(tbpackagVo: TbpackagVo): Promise<import("typeorm").InsertResult>;
    updateaTbpackag(Id: string, user_id: string, tbpackagVo: TbpackagVo): Promise<import("typeorm").UpdateResult>;
    removeTbpackag(Ids: string): Promise<import("typeorm").UpdateResult>;
    getTbpackagById(id: string): Promise<any>;
    getTbpackagList(search: TbpackagSearchVo): Promise<any[]>;
    getTbpackagAll(): Promise<any[]>;
    getTbpackagAllView(): Promise<any[]>;
}
