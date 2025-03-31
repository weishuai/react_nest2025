import { mybomVo } from '../myvo/mybom_vo';
export declare class mybomController {
    private mybomService;
    createmybom(mybomVo: mybomVo): Promise<import("typeorm").InsertResult>;
    updateamybom(userToken: string, Id: string, mybomVo: mybomVo): Promise<import("typeorm").UpdateResult>;
    removemybom(Id: string): Promise<import("typeorm").UpdateResult>;
    getmybomById(Id: string): Promise<any>;
    getmybomList(query: any): Promise<any[]>;
    getmybomAll(): Promise<any[]>;
    getmybomAllView(): Promise<any[]>;
}
