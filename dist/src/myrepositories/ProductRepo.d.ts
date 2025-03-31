import { ProductSearchVo, ProductVo } from '../myvo/ProductVo';
export declare class ProductRepo {
    create(accountTagVo: ProductVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ProductVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getproductsById(id: string): Promise<any>;
    getproductAll(search: ProductSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getproductAllView(): Promise<{
        fhok: any[];
    }>;
    getproduct(search: ProductSearchVo): Promise<any[]>;
}
