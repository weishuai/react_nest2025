import { QualityInspectionVo } from '../myvo/quality_inspection_vo';
export declare class QualityInspectionController {
    private qualityInspectionService;
    createQualityInspection(qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").InsertResult>;
    updateaQualityInspection(userToken: string, Id: string, qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").UpdateResult>;
    removeQualityInspection(Id: string): Promise<import("typeorm").UpdateResult>;
    getQualityInspectionById(Id: string): Promise<any>;
    getQualityInspectionList(query: any): Promise<any[]>;
    getQualityInspectionAll(): Promise<any[]>;
    getQualityInspectionAllView(): Promise<any[]>;
}
