import { SearchVo } from '../myutils/searchvo';
export declare class ProductVo {
    id: string;
    productName: string;
    description: string;
    manufacturer: string;
    category: string;
    currency: string;
    unit: string;
    listPrice: string;
    cost: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
    photo: string;
}
export declare class ProductSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
