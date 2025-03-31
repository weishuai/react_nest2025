import { SearchVo } from '../myutils/searchvo';
export declare class AttenceVo {
    id: string;
    name: string;
    date: Date;
    checkInTime: Date;
    checkInTemperature: string;
    checkInPlace: string;
    checkInAddress: string;
    checkInNotes: string;
    checkOutTime: Date;
    checkOutTemperature: string;
    checkOutPlace: string;
    checkOutAddress: string;
    checkOutNotes: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class AttenceSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
