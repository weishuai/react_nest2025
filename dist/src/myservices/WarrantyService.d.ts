import { WarrantySearchVo, WarrantyVo } from '../myvo/WarrantyVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class WarrantyService {
    private warrantyRepo;
    findOneWarranty(Id: string): Promise<any>;
    createWarranty(warrantyVo: WarrantyVo): Promise<import("typeorm").InsertResult>;
    updateaWarranty(Id: string, user_id: string, warrantyVo: WarrantyVo): Promise<import("typeorm").UpdateResult>;
    removeWarranty(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getWarrantyById(id: string): Promise<any>;
    getWarranty(search: WarrantySearchVo): Promise<any[]>;
    getWarrantyAll(search: WarrantySearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getWarrantyAllView(): Promise<any[]>;
}
