import { myWorkCenterVo } from '../myvo/mywork_center_vo';
export declare class myWorkCenterController {
    private myworkCenterService;
    createmyWorkCenter(myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").InsertResult>;
    updateamyWorkCenter(userToken: string, Id: string, myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").UpdateResult>;
    removemyWorkCenter(Id: string): Promise<import("typeorm").UpdateResult>;
    getmyWorkCenterById(Id: string): Promise<any>;
    getmyWorkCenterList(query: any): Promise<any[]>;
    getmyWorkCenterAll(): Promise<any[]>;
    getmyWorkCenterAllView(): Promise<any[]>;
}
