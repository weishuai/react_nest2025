import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';
export declare class FHRoleRepo {
    create(accountTagVo: FHRoleVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: FHRoleVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFHRolesById(id: string): Promise<any>;
    getFHRoleAll(search: FHRoleSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHRoleAllView(): Promise<any[]>;
    getFHRole(search: FHRoleSearchVo): Promise<any[]>;
}
