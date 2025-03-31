import { myBomProductSearchVo, myBomProductVo } from '../myvo/mybom_product_vo';
export declare class myBomProductRepo {
    create(mybomProductVo: myBomProductVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, mybomProductVo: myBomProductVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getmyBomProductsById(id: string): Promise<any>;
    getmyBomProductAll(): Promise<any[]>;
    getmyBomProductAllView(): Promise<any[]>;
    getmyBomProductList(search: myBomProductSearchVo): Promise<any[]>;
}
