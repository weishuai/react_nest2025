import { myWorkVo } from '../myvo/mywork_vo';
export declare class myWorkController {
    private myworkService;
    createmyWork(myworkVo: myWorkVo): Promise<import("typeorm").InsertResult>;
    updateamyWork(userToken: string, Id: string, myworkVo: myWorkVo): Promise<import("typeorm").UpdateResult>;
    removemyWork(Id: string): Promise<import("typeorm").UpdateResult>;
    getmyWorkById(Id: string): Promise<any>;
    getmyWorkList(query: any): Promise<any[]>;
    getmyWorkAll(): Promise<any[]>;
    getmyWorkAllView(): Promise<any[]>;
}
