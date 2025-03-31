import { TbmatchingSearchVo, TbmatchingVo } from '../myvo/tbmatching_vo';
export declare class TbmatchingService {
    private tbmatchingRepo;
    findOneTbmatching(Id: string): Promise<any>;
    createTbmatching(tbmatchingVo: TbmatchingVo): Promise<import("typeorm").InsertResult>;
    updateaTbmatching(Id: string, user_id: string, tbmatchingVo: TbmatchingVo): Promise<import("typeorm").UpdateResult>;
    removeTbmatching(Ids: string): Promise<import("typeorm").UpdateResult>;
    getTbmatchingById(id: string): Promise<any>;
    getTbmatchingList(search: TbmatchingSearchVo): Promise<any[]>;
    getTbmatchingAll(): Promise<any[]>;
    getTbmatchingAllView(): Promise<any[]>;
}
