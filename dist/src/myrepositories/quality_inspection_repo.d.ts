import { QualityInspectionSearchVo, QualityInspectionVo } from '../myvo/quality_inspection_vo';
export declare class QualityInspectionRepo {
    create(qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, qualityInspectionVo: QualityInspectionVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQualityInspectionsById(id: string): Promise<any>;
    getQualityInspectionAll(): Promise<any[]>;
    getQualityInspectionAllView(): Promise<any[]>;
    getQualityInspectionList(search: QualityInspectionSearchVo): Promise<any[]>;
}
