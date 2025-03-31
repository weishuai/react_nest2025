import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';
export declare class ProductTypeRepo {
    create(accountTagVo: ProductTypeVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ProductTypeVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProductTypesById(id: string): Promise<any>;
    getProductTypeAll(search: ProductTypeSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductTypeAllView(): Promise<any[]>;
    getProductType(search: ProductTypeSearchVo): Promise<any[]>;
}
