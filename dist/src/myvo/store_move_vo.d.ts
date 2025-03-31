import { SearchVo } from '../myutils/searchvo';
export declare class StoreMoveVo {
    id: string;
    name: string;
    partners: any;
    deliveryDate: any;
    sourceLocation: any;
    sourceDocument: any;
    type: any;
    owner: any;
    fhtime: any;
    notes: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class StoreMoveSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
