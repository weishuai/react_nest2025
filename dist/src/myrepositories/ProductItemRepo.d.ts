import { ProductItemSearchVo, ProductItemVo } from '../myvo/ProductItemVo';
export declare class ProductItemRepo {
    create(accountTagVo: ProductItemVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, accountTagVo: ProductItemVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getproductItemsById(id: string): Promise<any>;
    getproductItemAll(search: ProductItemSearchVo): Promise<{
        raws: any[];
        count: number;
    }>;
    getproductItemAllView(): Promise<any[]>;
    getproductItem(search: ProductItemSearchVo): Promise<any[]>;
}
