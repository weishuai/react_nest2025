import { TbmatchinglineVo } from '../myvo/tbmatchingline_vo';
export declare class TbmatchinglineController {
    private tbmatchinglineService;
    createTbmatchingline(tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").InsertResult>;
    updateaTbmatchingline(userToken: string, Id: string, tbmatchinglineVo: TbmatchinglineVo): Promise<import("typeorm").UpdateResult>;
    removeTbmatchingline(Id: string): Promise<import("typeorm").UpdateResult>;
    getTbmatchinglineById(Id: string): Promise<any>;
    getTbmatchinglineList(query: any): Promise<any[]>;
    getTbmatchinglineAll(): Promise<any[]>;
    getTbmatchinglineAllView(): Promise<any[]>;
}
