import { QualitylnspectionItemVo } from '../myvo/quality_inspection_item_vo';
export declare class QualitylnspectionItemController {
    private qualitylnspectionItemService;
    createQualitylnspectionItem(qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").InsertResult>;
    updateaQualitylnspectionItem(userToken: string, Id: string, qualitylnspectionItemVo: QualitylnspectionItemVo): Promise<import("typeorm").UpdateResult>;
    removeQualitylnspectionItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getQualitylnspectionItemById(Id: string): Promise<any>;
    getQualitylnspectionItemList(query: any): Promise<any[]>;
    getQualitylnspectionItemAll(): Promise<any[]>;
    getQualitylnspectionItemAllView(): Promise<any[]>;
}
