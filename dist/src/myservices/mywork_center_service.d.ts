import { myWorkCenterSearchVo, myWorkCenterVo } from '../myvo/mywork_center_vo';
export declare class myWorkCenterService {
    private myworkCenterRepo;
    findOnemyWorkCenter(Id: string): Promise<any>;
    createmyWorkCenter(myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").InsertResult>;
    updateamyWorkCenter(Id: string, user_id: string, myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").UpdateResult>;
    removemyWorkCenter(Ids: string): Promise<import("typeorm").UpdateResult>;
    getmyWorkCenterById(id: string): Promise<any>;
    getmyWorkCenterList(search: myWorkCenterSearchVo): Promise<any[]>;
    getmyWorkCenterAll(): Promise<any[]>;
    getmyWorkCenterAllView(): Promise<any[]>;
}
