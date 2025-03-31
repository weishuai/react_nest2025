import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class FHRoleService {
    private fhroleRepo;
    findOneFHRole(Id: string): Promise<any>;
    createFHRole(fhroleVo: FHRoleVo): Promise<import("typeorm").InsertResult>;
    updateaFHRole(Id: string, user_id: string, fhroleVo: FHRoleVo): Promise<import("typeorm").UpdateResult>;
    removeFHRole(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFHRoleById(id: string): Promise<any>;
    getFHRole(search: FHRoleSearchVo): Promise<any[]>;
    getFHRoleAll(search: FHRoleSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHRoleAllView(): Promise<any[]>;
}
