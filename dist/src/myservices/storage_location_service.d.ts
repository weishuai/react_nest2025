import { StoragelocationSearchVo, StoragelocationVo } from '../myvo/storage_location_vo';
export declare class StoragelocationService {
    private storagelocationRepo;
    findOneStoragelocation(Id: string): Promise<any>;
    createStoragelocation(storagelocationVo: StoragelocationVo): Promise<import("typeorm").InsertResult>;
    updateaStoragelocation(Id: string, user_id: string, storagelocationVo: StoragelocationVo): Promise<import("typeorm").UpdateResult>;
    removeStoragelocation(Ids: string): Promise<import("typeorm").UpdateResult>;
    getStoragelocationById(id: string): Promise<any>;
    getStoragelocationList(search: StoragelocationSearchVo): Promise<any[]>;
    getStoragelocationAll(): Promise<any[]>;
    getStoragelocationAllView(): Promise<any[]>;
}
