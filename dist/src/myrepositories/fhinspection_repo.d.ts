import { FhinspectionSearchVo, FhinspectionVo } from '../myvo/fhinspection_vo';
export declare class FhinspectionRepo {
    create(fhinspectionVo: FhinspectionVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhinspectionVo: FhinspectionVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhinspectionsById(id: string): Promise<any>;
    getFhinspectionAll(): Promise<any[]>;
    getFhinspectionAllView(): Promise<any[]>;
    getFhinspectionList(search: FhinspectionSearchVo): Promise<any[]>;
}
