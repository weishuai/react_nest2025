import { TbreturnvisitVo } from '../myvo/tbreturnvisit_vo';
export declare class TbreturnvisitController {
    private tbreturnvisitService;
    createTbreturnvisit(tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").InsertResult>;
    updateaTbreturnvisit(userToken: string, Id: string, tbreturnvisitVo: TbreturnvisitVo): Promise<import("typeorm").UpdateResult>;
    removeTbreturnvisit(Id: string): Promise<import("typeorm").UpdateResult>;
    getTbreturnvisitById(Id: string): Promise<any>;
    getTbreturnvisitList(query: any): Promise<any[]>;
    getTbreturnvisitAll(): Promise<any[]>;
    getTbreturnvisitAllView(): Promise<any[]>;
}
