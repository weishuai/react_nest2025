import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class ProductService {
    private productRepo;
    findOneProduct(Id: string): Promise<any>;
    createProduct(productVo: ProductVo): Promise<import("typeorm").InsertResult>;
    updateaProduct(Id: string, user_id: string, productVo: ProductVo): Promise<import("typeorm").UpdateResult>;
    removeProduct(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getProductById(id: string): Promise<any>;
    getProduct(search: ProductSearchVo): Promise<any[]>;
    getProductAll(search: ProductSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getProductAllView(): Promise<{
        fhok: any[];
    }>;
}
