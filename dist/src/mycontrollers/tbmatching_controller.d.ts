import { TbmatchingVo } from '../myvo/tbmatching_vo';
export declare class TbmatchingController {
    private tbmatchingService;
    createTbmatching(tbmatchingVo: TbmatchingVo): Promise<import("typeorm").InsertResult>;
    updateaTbmatching(userToken: string, Id: string, tbmatchingVo: TbmatchingVo): Promise<import("typeorm").UpdateResult>;
    removeTbmatching(Id: string): Promise<import("typeorm").UpdateResult>;
    getTbmatchingById(Id: string): Promise<any>;
    getTbmatchingList(query: any): Promise<any[]>;
    getTbmatchingAll(): Promise<any[]>;
    getTbmatchingAllView(): Promise<any[]>;
}
