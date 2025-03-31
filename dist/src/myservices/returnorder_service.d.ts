import { ReturnorderSearchVo, ReturnorderVo } from '../myvo/returnorder_vo';
export declare class ReturnorderService {
    private returnorderRepo;
    findOneReturnorder(Id: string): Promise<any>;
    createReturnorder(returnorderVo: ReturnorderVo): Promise<import("typeorm").InsertResult>;
    updateaReturnorder(Id: string, user_id: string, returnorderVo: ReturnorderVo): Promise<import("typeorm").UpdateResult>;
    removeReturnorder(Ids: string): Promise<import("typeorm").UpdateResult>;
    getReturnorderById(id: string): Promise<any>;
    getReturnorderList(search: ReturnorderSearchVo): Promise<any[]>;
    getReturnorderAll(): Promise<any[]>;
    getReturnorderAllView(): Promise<any[]>;
}
