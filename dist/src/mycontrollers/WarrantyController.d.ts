import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';
export declare class WarrantyController {
    private warrantyService;
    createWarranty(WarrantyVo: WarrantyVo): Promise<import("typeorm").InsertResult>;
    updateaWarranty(userToken: string, Id: string, WarrantyVo: WarrantyVo): Promise<import("typeorm").UpdateResult>;
    removeWarranty(Id: string): Promise<import("typeorm").UpdateResult>;
    getWarrantyById(Id: string): Promise<any>;
    getWarranty(search: WarrantySearchVo): Promise<any[]>;
    getWarrantyAll(search: WarrantySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWarrantyAllView(): Promise<any[]>;
}
