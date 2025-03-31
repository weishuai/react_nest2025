import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ProductItemService {
    private ProductItemRepo;
    findOneProductItem(Id: string): Promise<any>;
    createProductItem(productItemVo: ProductItemVo): Promise<import("typeorm").InsertResult>;
    updateaProductItem(Id: string, user_id: string, productItemVo: ProductItemVo): Promise<import("typeorm").UpdateResult>;
    removeProductItem(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProductItemById(id: string): Promise<any>;
    getProductItem(search: ProductItemSearchVo): Promise<any[]>;
    getProductItemAll(search: ProductItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductItemAllView(): Promise<any[]>;
}
