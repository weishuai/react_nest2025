import { QualityInspectionSearchVo, QualityInspectionVo } from '../myvo/quality_inspection_vo';
export declare class QualityInspectionService {
    private qualityInspectionRepo;
    findOneQualityInspection(Id: string): Promise<any>;
    createQualityInspection(qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").InsertResult>;
    updateaQualityInspection(Id: string, user_id: string, qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").UpdateResult>;
    removeQualityInspection(Ids: string): Promise<import("typeorm").UpdateResult>;
    getQualityInspectionById(id: string): Promise<any>;
    getQualityInspectionList(search: QualityInspectionSearchVo): Promise<any[]>;
    getQualityInspectionAll(): Promise<any[]>;
    getQualityInspectionAllView(): Promise<any[]>;
}
