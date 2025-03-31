import { mybomSearchVo, mybomVo } from '../myvo/mybom_vo';
export declare class mybomService {
    private mybomRepo;
    findOnemybom(Id: string): Promise<any>;
    createmybom(mybomVo: mybomVo): Promise<import("typeorm").InsertResult>;
    updateamybom(Id: string, user_id: string, mybomVo: mybomVo): Promise<import("typeorm").UpdateResult>;
    removemybom(Ids: string): Promise<import("typeorm").UpdateResult>;
    getmybomById(id: string): Promise<any>;
    getmybomList(search: mybomSearchVo): Promise<any[]>;
    getmybomAll(): Promise<any[]>;
    getmybomAllView(): Promise<any[]>;
}
