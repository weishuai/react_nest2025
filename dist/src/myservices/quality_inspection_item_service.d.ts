import { QualitylnspectionItemSearchVo, QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
export declare class QualitylnspectionItemService {
    private qualitylnspectionItemRepo;
    findOneQualitylnspectionItem(Id: string): Promise<any>;
    createQualitylnspectionItem(qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").InsertResult>;
    updateaQualitylnspectionItem(Id: string, user_id: string, qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").UpdateResult>;
    removeQualitylnspectionItem(Ids: string): Promise<import("typeorm").UpdateResult>;
    getQualitylnspectionItemById(id: string): Promise<any>;
    getQualitylnspectionItemList(search: QualitylnspectionItemSearchVo): Promise<any[]>;
    getQualitylnspectionItemAll(): Promise<any[]>;
    getQualitylnspectionItemAllView(): Promise<any[]>;
}
