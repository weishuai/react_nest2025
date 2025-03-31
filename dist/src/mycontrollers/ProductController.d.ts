import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';
export declare class ProductController {
    private productService;
    createProduct(ProductVo: ProductVo): Promise<import("typeorm").InsertResult>;
    updateaProduct(userToken: string, Id: string, ProductVo: ProductVo): Promise<import("typeorm").UpdateResult>;
    removeProduct(Id: string): Promise<import("typeorm").UpdateResult>;
    getProductById(Id: string): Promise<any>;
    getProduct(search: ProductSearchVo): Promise<any[]>;
    getProductAll(search: ProductSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductAllView(): Promise<{
        fhok: any[];
    }>;
}
