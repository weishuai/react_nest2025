import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
export declare class FHUserController {
    private fhuserService;
    createFHUser(FHUserVo: FHUserVo): Promise<void>;
    UsersLogin(query: any): Promise<any[]>;
    updateaFHUser(userToken: string, Id: string, FHUserVo: FHUserVo): Promise<void>;
    removeFHUser(Id: string): Promise<void>;
    getFHUserById(Id: string): Promise<any>;
    getFHUser(search: FHUserSearchVo): Promise<any[]>;
    getFHUserAll(): Promise<any[]>;
    getFHUserAll002(search: FHUserSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHUserAllView(): Promise<any[]>;
}
