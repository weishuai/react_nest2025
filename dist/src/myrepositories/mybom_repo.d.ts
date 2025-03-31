import { mybomSearchVo, mybomVo } from '../myvo/mybom_vo';
export declare class mybomRepo {
    create(mybomVo: mybomVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, mybomVo: mybomVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getmybomsById(id: string): Promise<any>;
    getmybomAll(): Promise<any[]>;
    getmybomAllView(): Promise<any[]>;
    getmybomList(search: mybomSearchVo): Promise<any[]>;
}
