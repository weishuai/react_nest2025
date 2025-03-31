import { SearchVo } from '../myutils/searchvo';
export declare class myWorkVo {
    id: string;
    name: string;
    operationName: any;
    duration: any;
    workCenter: any;
    defaultDuration: number;
    serialNumber: any;
    company: any;
    bom: any;
    worksheet: any;
    fhtext: any;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class myWorkSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
