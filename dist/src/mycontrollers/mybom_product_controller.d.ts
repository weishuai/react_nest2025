import { myBomProductVo } from '../myvo/mybom_product_vo';
export declare class myBomProductController {
    private mybomProductService;
    createmyBomProduct(mybomProductVo: myBomProductVo): Promise<import("typeorm").InsertResult>;
    updateamyBomProduct(userToken: string, Id: string, mybomProductVo: myBomProductVo): Promise<import("typeorm").UpdateResult>;
    removemyBomProduct(Id: string): Promise<import("typeorm").UpdateResult>;
    getmyBomProductById(Id: string): Promise<any>;
    getmyBomProductList(query: any): Promise<any[]>;
    getmyBomProductAll(): Promise<any[]>;
    getmyBomProductAllView(): Promise<any[]>;
}
