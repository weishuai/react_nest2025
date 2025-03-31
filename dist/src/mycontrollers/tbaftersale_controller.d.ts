import { TbaftersaleVo } from '../myvo/tbaftersale_vo';
export declare class TbaftersaleController {
    private tbaftersaleService;
    createTbaftersale(tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").InsertResult>;
    updateaTbaftersale(userToken: string, Id: string, tbaftersaleVo: TbaftersaleVo): Promise<import("typeorm").UpdateResult>;
    removeTbaftersale(Id: string): Promise<import("typeorm").UpdateResult>;
    getTbaftersaleById(Id: string): Promise<any>;
    getTbaftersaleList(query: any): Promise<any[]>;
    getTbaftersaleAll(): Promise<any[]>;
    getTbaftersaleAllView(): Promise<any[]>;
}
