import { TbpackagVo } from '../myvo/tbpackag_vo';
export declare class TbpackagController {
    private tbpackagService;
    createTbpackag(tbpackagVo: TbpackagVo): Promise<import("typeorm").InsertResult>;
    updateaTbpackag(userToken: string, Id: string, tbpackagVo: TbpackagVo): Promise<import("typeorm").UpdateResult>;
    removeTbpackag(Id: string): Promise<import("typeorm").UpdateResult>;
    getTbpackagById(Id: string): Promise<any>;
    getTbpackagList(query: any): Promise<any[]>;
    getTbpackagAll(): Promise<any[]>;
    getTbpackagAllView(): Promise<any[]>;
}
