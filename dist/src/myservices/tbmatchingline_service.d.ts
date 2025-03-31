import { TbmatchinglineSearchVo, TbmatchinglineVo } from '../myvo/tbmatchingline_vo';
export declare class TbmatchinglineService {
    private tbmatchinglineRepo;
    findOneTbmatchingline(Id: string): Promise<any>;
    createTbmatchingline(tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").InsertResult>;
    updateaTbmatchingline(Id: string, user_id: string, tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").UpdateResult>;
    removeTbmatchingline(Ids: string): Promise<import("typeorm").UpdateResult>;
    getTbmatchinglineById(id: string): Promise<any>;
    getTbmatchinglineList(search: TbmatchinglineSearchVo): Promise<any[]>;
    getTbmatchinglineAll(): Promise<any[]>;
    getTbmatchinglineAllView(): Promise<any[]>;
}
