import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class StaffListService {
    private staffListRepo;
    findOneStaffList(Id: string): Promise<any>;
    createStaffList(staffListVo: StaffListVo): Promise<import("typeorm").InsertResult>;
    updateaStaffList(Id: string, user_id: string, staffListVo: StaffListVo): Promise<import("typeorm").UpdateResult>;
    removeStaffList(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStaffListById(id: string): Promise<any>;
    getStaffList(search: StaffListSearchVo): Promise<any[]>;
    getStaffListAll(search: StaffListSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStaffListAllView(): Promise<any[]>;
}
