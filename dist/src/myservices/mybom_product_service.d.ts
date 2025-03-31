import { myBomProductSearchVo, myBomProductVo } from '../myvo/mybom_product_vo';
export declare class myBomProductService {
    private mybomProductRepo;
    findOnemyBomProduct(Id: string): Promise<any>;
    createmyBomProduct(mybomProductVo: myBomProductVo): Promise<import("typeorm").InsertResult>;
    updateamyBomProduct(Id: string, user_id: string, mybomProductVo: myBomProductVo): Promise<import("typeorm").UpdateResult>;
    removemyBomProduct(Ids: string): Promise<import("typeorm").UpdateResult>;
    getmyBomProductById(id: string): Promise<any>;
    getmyBomProductList(search: myBomProductSearchVo): Promise<any[]>;
    getmyBomProductAll(): Promise<any[]>;
    getmyBomProductAllView(): Promise<any[]>;
}
