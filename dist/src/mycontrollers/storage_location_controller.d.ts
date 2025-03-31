import { StoragelocationVo } from '../myvo/storage_location_vo';
export declare class StoragelocationController {
    private storagelocationService;
    createStoragelocation(storagelocationVo: StoragelocationVo): Promise<import("typeorm").InsertResult>;
    updateaStoragelocation(userToken: string, Id: string, storagelocationVo: StoragelocationVo): Promise<import("typeorm").UpdateResult>;
    removeStoragelocation(Id: string): Promise<import("typeorm").UpdateResult>;
    getStoragelocationById(Id: string): Promise<any>;
    getStoragelocationList(query: any): Promise<any[]>;
    getStoragelocationAll(): Promise<any[]>;
    getStoragelocationAllView(): Promise<any[]>;
}
