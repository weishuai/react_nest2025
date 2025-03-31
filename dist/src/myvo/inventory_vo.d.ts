import { SearchVo } from '../myutils/searchvo';
export declare class InventoryVo {
    id: string;
    name: string;
    title: any;
    position: any;
    jobDate: any;
    warehouse: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class InventorySearchVo extends SearchVo {
    fundType: string;
    status: number;
}
