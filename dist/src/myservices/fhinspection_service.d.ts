import { FhinspectionSearchVo, FhinspectionVo } from '../myvo/fhinspection_vo';
export declare class FhinspectionService {
    private fhinspectionRepo;
    findOneFhinspection(Id: string): Promise<any>;
    createFhinspection(fhinspectionVo: FhinspectionVo): Promise<import("typeorm").InsertResult>;
    updateaFhinspection(Id: string, user_id: string, fhinspectionVo: FhinspectionVo): Promise<import("typeorm").UpdateResult>;
    removeFhinspection(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhinspectionById(id: string): Promise<any>;
    getFhinspectionList(search: FhinspectionSearchVo): Promise<any[]>;
    getFhinspectionAll(): Promise<any[]>;
    getFhinspectionAllView(): Promise<any[]>;
}
