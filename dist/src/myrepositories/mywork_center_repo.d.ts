import { myWorkCenterSearchVo, myWorkCenterVo } from '../myvo/mywork_center_vo';
export declare class myWorkCenterRepo {
    create(myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, myworkCenterVo: myWorkCenterVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getmyWorkCentersById(id: string): Promise<any>;
    getmyWorkCenterAll(): Promise<any[]>;
    getmyWorkCenterAllView(): Promise<any[]>;
    getmyWorkCenterList(search: myWorkCenterSearchVo): Promise<any[]>;
}
