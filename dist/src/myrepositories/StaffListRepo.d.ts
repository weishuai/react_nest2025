import { StaffListSearchVo, StaffListVo } from '../myvo/StaffListVo';
export declare class StaffListRepo {
    create(accountTagVo: StaffListVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: StaffListVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getStaffListsById(id: string): Promise<any>;
    getStaffListAll(search: StaffListSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getStaffListAllView(): Promise<any[]>;
    getStaffList(search: StaffListSearchVo): Promise<any[]>;
}
