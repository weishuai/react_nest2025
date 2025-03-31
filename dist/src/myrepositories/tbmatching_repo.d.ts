import { TbmatchingSearchVo, TbmatchingVo } from '../myvo/tbmatching_vo';
export declare class TbmatchingRepo {
    create(tbmatchingVo: TbmatchingVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, tbmatchingVo: TbmatchingVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getTbmatchingsById(id: string): Promise<any>;
    getTbmatchingAll(): Promise<any[]>;
    getTbmatchingAllView(): Promise<any[]>;
    getTbmatchingList(search: TbmatchingSearchVo): Promise<any[]>;
}
