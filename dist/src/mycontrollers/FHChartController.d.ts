import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
export declare class FHChartController {
    private fhuserService;
    createFHUser(FHUserVo: FHUserVo): Promise<void>;
    UsersLogin(query: any): Promise<any[]>;
    updateaFHUser(userToken: string, Id: string, FHUserVo: FHUserVo): Promise<void>;
    removeFHUser(Id: string): Promise<void>;
    getFHUserById(Id: string): Promise<any>;
    getFHUser(search: FHUserSearchVo): Promise<any[]>;
    getFHUserAll(): Promise<any[]>;
    getFHUserAllView(): Promise<any[]>;
    getFHAccountTagList(query: any): Promise<{
        data: {
            id: number;
            name: string;
            country: {
                name: string;
                code: string;
            };
            company: string;
            date: string;
            status: string;
            verified: boolean;
            activity: number;
            representative: {
                name: string;
                image: string;
            };
            balance: number;
        }[];
    }>;
}
