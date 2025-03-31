import { FhmeasuringVo } from '../myvo/fhmeasuring_vo';
export declare class FhmeasuringController {
    private fhmeasuringService;
    createFhmeasuring(fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").InsertResult>;
    updateaFhmeasuring(userToken: string, Id: string, fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").UpdateResult>;
    removeFhmeasuring(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhmeasuringById(Id: string): Promise<any>;
    getFhmeasuringList(query: any): Promise<any[]>;
    getFhmeasuringAll(): Promise<any[]>;
    getFhmeasuringAllView(): Promise<any[]>;
}
