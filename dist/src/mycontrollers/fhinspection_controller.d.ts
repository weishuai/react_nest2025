import { FhinspectionVo } from '../myvo/fhinspection_vo';
export declare class FhinspectionController {
    private fhinspectionService;
    createFhinspection(fhinspectionVo: FhinspectionVo): Promise<import("typeorm").InsertResult>;
    updateaFhinspection(userToken: string, Id: string, fhinspectionVo: FhinspectionVo): Promise<import("typeorm").UpdateResult>;
    removeFhinspection(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhinspectionById(Id: string): Promise<any>;
    getFhinspectionList(query: any): Promise<any[]>;
    getFhinspectionAll(): Promise<any[]>;
    getFhinspectionAllView(): Promise<any[]>;
}
