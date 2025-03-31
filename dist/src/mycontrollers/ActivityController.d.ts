import { ActivitySearchVo, ActivityVo, FHActivitySearchVo } from '../myvo/ActivityVo';
export declare class ActivityController {
    private activityService;
    createActivity(ActivityVo: ActivityVo): Promise<import("typeorm").InsertResult>;
    updateaActivity(userToken: string, Id: string, ActivityVo: ActivityVo): Promise<import("typeorm").UpdateResult>;
    removeActivity(Id: string): Promise<import("typeorm").UpdateResult>;
    getActivityById(Id: string): Promise<any>;
    getActivitSQL(userToken: string, search: FHActivitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
    getActivity(userToken: string, search: ActivitySearchVo): Promise<any[]>;
    getActivityTask(userToken: string, search: ActivitySearchVo): Promise<any[]>;
    getActivityNote(userToken: string, search: ActivitySearchVo): Promise<any[]>;
    getActivityAll(search: ActivitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getActivityAllView(): Promise<{
        fhok: any[];
    }>;
    getActivityEventsAll(): Promise<any[]>;
}
