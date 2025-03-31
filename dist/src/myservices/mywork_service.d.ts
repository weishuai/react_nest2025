import { myWorkSearchVo, myWorkVo } from '../myvo/mywork_vo';
export declare class myWorkService {
    private myworkRepo;
    findOnemyWork(Id: string): Promise<any>;
    createmyWork(myworkVo: myWorkVo): Promise<import("typeorm").InsertResult>;
    updateamyWork(Id: string, user_id: string, myworkVo: myWorkVo): Promise<import("typeorm").UpdateResult>;
    removemyWork(Ids: string): Promise<import("typeorm").UpdateResult>;
    getmyWorkById(id: string): Promise<any>;
    getmyWorkList(search: myWorkSearchVo): Promise<any[]>;
    getmyWorkAll(): Promise<any[]>;
    getmyWorkAllView(): Promise<any[]>;
}
