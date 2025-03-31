import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';
export declare class StaffListController {
    private staffListService;
    createStaffList(StaffListVo: StaffListVo): Promise<import("typeorm").InsertResult>;
    updateaStaffList(userToken: string, Id: string, StaffListVo: StaffListVo): Promise<import("typeorm").UpdateResult>;
    removeStaffList(Id: string): Promise<import("typeorm").UpdateResult>;
    getStaffListById(Id: string): Promise<any>;
    getStaffList(search: StaffListSearchVo): Promise<any[]>;
    getStaffListAll(search: StaffListSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStaffListAllView(): Promise<any[]>;
}
