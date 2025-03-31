import { ReturnorderVo } from '../myvo/returnorder_vo';
export declare class ReturnorderController {
    private returnorderService;
    createReturnorder(returnorderVo: ReturnorderVo): Promise<import("typeorm").InsertResult>;
    updateaReturnorder(userToken: string, Id: string, returnorderVo: ReturnorderVo): Promise<import("typeorm").UpdateResult>;
    removeReturnorder(Id: string): Promise<import("typeorm").UpdateResult>;
    getReturnorderById(Id: string): Promise<any>;
    getReturnorderList(query: any): Promise<any[]>;
    getReturnorderAll(): Promise<any[]>;
    getReturnorderAllView(): Promise<any[]>;
}
