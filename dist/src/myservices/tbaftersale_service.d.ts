import { TbaftersaleSearchVo, TbaftersaleVo } from '../myvo/tbaftersale_vo';
export declare class TbaftersaleService {
    private tbaftersaleRepo;
    findOneTbaftersale(Id: string): Promise<any>;
    createTbaftersale(tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").InsertResult>;
    updateaTbaftersale(Id: string, user_id: string, tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").UpdateResult>;
    removeTbaftersale(Ids: string): Promise<import("typeorm").UpdateResult>;
    getTbaftersaleById(id: string): Promise<any>;
    getTbaftersaleList(search: TbaftersaleSearchVo): Promise<any[]>;
    getTbaftersaleAll(): Promise<any[]>;
    getTbaftersaleAllView(): Promise<any[]>;
}
