import { ActivitySearchVo, ActivityVo, FHActivitySearchVo } from '../myvo/ActivityVo';
export declare class ActivityRepo {
    create(accountTagVo: ActivityVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ActivityVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getActivitysById(id: string): Promise<any>;
    getActivityAll(search: ActivitySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getActivityAllView(): Promise<{
        fhok: any[];
    }>;
    getActivityEventsAll(): Promise<any[]>;
    getActivity(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivitTask(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivitNote(userId: string, search: ActivitySearchVo): Promise<any[]>;
    getActivitSQL(userId: string, search: FHActivitySearchVo): Promise<{
        count: number;
        raws: any[];
    }>;
}
