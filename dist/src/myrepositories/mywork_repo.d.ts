import { myWorkSearchVo, myWorkVo } from '../myvo/mywork_vo';
export declare class myWorkRepo {
    create(myworkVo: myWorkVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, myworkVo: myWorkVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getmyWorksById(id: string): Promise<any>;
    getmyWorkAll(): Promise<any[]>;
    getmyWorkAllView(): Promise<any[]>;
    getmyWorkList(search: myWorkSearchVo): Promise<any[]>;
}
