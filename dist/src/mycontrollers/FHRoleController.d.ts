import { FHRoleSearchVo, FHRoleVo } from '../myvo/FHRoleVo';
export declare class FHRoleController {
    private fhroleService;
    createFHRole(FHRoleVo: FHRoleVo): Promise<import("typeorm").InsertResult>;
    updateaFHRole(userToken: string, Id: string, FHRoleVo: FHRoleVo): Promise<import("typeorm").UpdateResult>;
    removeFHRole(Id: string): Promise<import("typeorm").UpdateResult>;
    getFHRoleById(Id: string): Promise<any>;
    getFHRole(search: FHRoleSearchVo): Promise<any[]>;
    getFHRoleAll(search: FHRoleSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHRoleAllView(): Promise<any[]>;
}
