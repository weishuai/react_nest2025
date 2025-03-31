import { ProductTypeSearchVo, ProductTypeVo } from '../myvo/ProductTypeVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ProductTypeService {
    private productTypeRepo;
    findOneProductType(Id: string): Promise<any>;
    createProductType(productTypeVo: ProductTypeVo): Promise<import("typeorm").InsertResult>;
    updateaProductType(Id: string, user_id: string, productTypeVo: ProductTypeVo): Promise<import("typeorm").UpdateResult>;
    removeProductType(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProductTypeById(id: string): Promise<any>;
    getProductType(search: ProductTypeSearchVo): Promise<any[]>;
    getProductTypeAll(search: ProductTypeSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductTypeAllView(): Promise<any[]>;
}
