import { TbaftersaleSearchVo, TbaftersaleVo } from '../myvo/tbaftersale_vo';
export declare class TbaftersaleRepo {
    create(tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTbaftersalesById(id: string): Promise<any>;
    getTbaftersaleAll(): Promise<any[]>;
    getTbaftersaleAllView(): Promise<any[]>;
    getTbaftersaleList(search: TbaftersaleSearchVo): Promise<any[]>;
}
