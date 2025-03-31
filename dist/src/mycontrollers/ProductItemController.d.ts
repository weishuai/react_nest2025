import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';
export declare class ProductItemController {
    private productItemService;
    createProductItem(ProductItemVo: ProductItemVo): Promise<import("typeorm").InsertResult>;
    updateaProductItem(userToken: string, Id: string, ProductItemVo: ProductItemVo): Promise<import("typeorm").UpdateResult>;
    removeProductItem(Id: string): Promise<import("typeorm").UpdateResult>;
    getProductItemById(Id: string): Promise<any>;
    getProductItem(search: ProductItemSearchVo): Promise<any[]>;
    getProductItemAll(search: ProductItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductItemAllView(): Promise<any[]>;
}
