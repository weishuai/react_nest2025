import { SearchVo } from '../myutils/searchvo';
export declare class StoragelocationVo {
    id: string;
    name: string;
    myname: any;
    mid: any;
    type: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StoragelocationSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
