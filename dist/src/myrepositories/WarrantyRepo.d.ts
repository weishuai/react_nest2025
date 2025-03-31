import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';
export declare class WarrantyRepo {
    create(accountTagVo: WarrantyVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: WarrantyVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWarrantysById(id: string): Promise<any>;
    getWarrantyAll(search: WarrantySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWarrantyAllView(): Promise<any[]>;
    getWarranty(search: WarrantySearchVo): Promise<any[]>;
}
