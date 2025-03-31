import { ActivitySearchVo, ActivityVo, FHActivitySearchVo } from '../myvo/ActivityVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ActivityService {
    private activityRepo;
    findOneActivity(Id: string): Promise<any>;
    createActivity(activityVo: ActivityVo): Promise<import("typeorm").InsertResult>;
    updateaActivity(Id: string, user_id: string, activityVo: ActivityVo): Promise<import("typeorm").UpdateResult>;
    removeActivity(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getActivityById(id: string): Promise<any>;
    getActivity(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivitSQL(userId: string, search: FHActivitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getActivityTask(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivityNote(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivityAll(search: ActivitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getActivityAllView(): Promise<{
        fhok: any[];
    }>;
    getActivityEventsAll(): Promise<any[]>;
}
