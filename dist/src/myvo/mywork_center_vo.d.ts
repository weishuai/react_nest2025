import { SearchVo } from '../myutils/searchvo';
export declare class myWorkCenterVo {
    id: string;
    name: string;
    workcenter: any;
    code: any;
    title: any;
    workingHours: number;
    fhreplace: any;
    timeEfficiency: any;
    capacity: any;
    oee: any;
    setTime: number;
    cleaningTime: number;
    hourlyCost: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class myWorkCenterSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
