import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
export declare class FHUserService {
    private fhuserRepo;
    findOneFHUser(Id: string): Promise<any>;
    UsersLogin(email: string, password: string): Promise<any[]>;
    createFHUser(fhuserVo: FHUserVo): Promise<void>;
    updateaFHUser(Id: string, user_id: string, fhuserVo: FHUserVo): Promise<void>;
    removeFHUser(Ids: string[]): Promise<void>;
    getFHUserById(id: string): Promise<any>;
    getFHUser(search: FHUserSearchVo): Promise<any[]>;
    getFHUserAll(): Promise<any[]>;
    getFHUserAll002(search: FHUserSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getFHUserAllView(): Promise<any[]>;
}
