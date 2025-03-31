import { TbreturnvisitSearchVo, TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
export declare class TbreturnvisitService {
    private tbreturnvisitRepo;
    findOneTbreturnvisit(Id: string): Promise<any>;
    createTbreturnvisit(tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").InsertResult>;
    updateaTbreturnvisit(Id: string, user_id: string, tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").UpdateResult>;
    removeTbreturnvisit(Ids: string): Promise<import("typeorm").UpdateResult>;
    getTbreturnvisitById(id: string): Promise<any>;
    getTbreturnvisitList(search: TbreturnvisitSearchVo): Promise<any[]>;
    getTbreturnvisitAll(): Promise<any[]>;
    getTbreturnvisitAllView(): Promise<any[]>;
}
