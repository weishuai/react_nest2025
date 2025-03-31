import { FHUserSearchVo } from '../myvo/FHUserVo';
export declare class FHUserRepo {
    getFHUsersById(id: string): Promise<any>;
    UsersLogin(email: string, password: string): Promise<any[]>;
    getFHUserAll(): Promise<any[]>;
    getFHUserAll002(search: FHUserSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHUserAllView(): Promise<any[]>;
    getFHUser(search: FHUserSearchVo): Promise<any[]>;
}
