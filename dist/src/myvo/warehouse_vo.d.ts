import { SearchVo } from '../myutils/searchvo';
export declare class WarehouseVo {
    id: string;
    name: string;
    myname: any;
    fhname: any;
    address: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class WarehouseSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
