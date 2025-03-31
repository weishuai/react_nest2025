import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';
export declare class ProductTypeController {
    private productTypeService;
    createProductType(ProductTypeVo: ProductTypeVo): Promise<import("typeorm").InsertResult>;
    updateaProductType(userToken: string, Id: string, ProductTypeVo: ProductTypeVo): Promise<import("typeorm").UpdateResult>;
    removeProductType(Id: string): Promise<import("typeorm").UpdateResult>;
    getProductTypeById(Id: string): Promise<any>;
    getProductType(search: ProductTypeSearchVo): Promise<any[]>;
    getProductTypeAll(search: ProductTypeSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductTypeAllView(): Promise<any[]>;
}
