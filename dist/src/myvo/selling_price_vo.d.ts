import { SearchVo } from '../myutils/searchvo';
export declare class SellingPriceVo {
    id: string;
    name: string;
    fhname: any;
    company: number;
    mygroup: any;
    dscountPolicy: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class SellingPriceSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
