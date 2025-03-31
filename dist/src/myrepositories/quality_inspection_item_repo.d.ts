import { QualitylnspectionItemSearchVo, QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
export declare class QualitylnspectionItemRepo {
    create(qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getQualitylnspectionItemsById(id: string): Promise<any>;
    getQualitylnspectionItemAll(): Promise<any[]>;
    getQualitylnspectionItemAllView(): Promise<any[]>;
    getQualitylnspectionItemList(search: QualitylnspectionItemSearchVo): Promise<any[]>;
}
