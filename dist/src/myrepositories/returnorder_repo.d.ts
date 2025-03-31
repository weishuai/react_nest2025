import { ReturnorderSearchVo, ReturnorderVo } from '../myvo/returnorder_vo';
export declare class ReturnorderRepo {
    create(returnorderVo: ReturnorderVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, returnorderVo: ReturnorderVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getReturnordersById(id: string): Promise<any>;
    getReturnorderAll(): Promise<any[]>;
    getReturnorderAllView(): Promise<any[]>;
    getReturnorderList(search: ReturnorderSearchVo): Promise<any[]>;
}
