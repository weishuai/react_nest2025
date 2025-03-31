import { StoragelocationSearchVo, StoragelocationVo } from '../myvo/storage_location_vo';
export declare class StoragelocationRepo {
    create(storagelocationVo: StoragelocationVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, storagelocationVo: StoragelocationVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStoragelocationsById(id: string): Promise<any>;
    getStoragelocationAll(): Promise<any[]>;
    getStoragelocationAllView(): Promise<any[]>;
    getStoragelocationList(search: StoragelocationSearchVo): Promise<any[]>;
}
