import { FHUserVo } from '../myvo/FHUserVo';
export declare class UserRepo {
    create(accountTagVo: FHUserVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: FHUserVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getUserBaseAll(): Promise<any[]>;
    getUserBaseAllView(): Promise<any[]>;
    getUserBaseById(id: string): Promise<any>;
}
