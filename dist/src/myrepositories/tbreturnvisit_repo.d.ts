import { TbreturnvisitSearchVo, TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
export declare class TbreturnvisitRepo {
    create(tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTbreturnvisitsById(id: string): Promise<any>;
    getTbreturnvisitAll(): Promise<any[]>;
    getTbreturnvisitAllView(): Promise<any[]>;
    getTbreturnvisitList(search: TbreturnvisitSearchVo): Promise<any[]>;
}
