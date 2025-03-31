import { TbmatchinglineSearchVo, TbmatchinglineVo } from '../myvo/tbmatchingline_vo';
export declare class TbmatchinglineRepo {
    create(tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTbmatchinglinesById(id: string): Promise<any>;
    getTbmatchinglineAll(): Promise<any[]>;
    getTbmatchinglineAllView(): Promise<any[]>;
    getTbmatchinglineList(search: TbmatchinglineSearchVo): Promise<any[]>;
}
