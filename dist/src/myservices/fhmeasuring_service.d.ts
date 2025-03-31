import { FhmeasuringSearchVo, FhmeasuringVo } from '../myvo/fhmeasuring_vo';
export declare class FhmeasuringService {
    private fhmeasuringRepo;
    findOneFhmeasuring(Id: string): Promise<any>;
    createFhmeasuring(fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").InsertResult>;
    updateaFhmeasuring(Id: string, user_id: string, fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").UpdateResult>;
    removeFhmeasuring(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhmeasuringById(id: string): Promise<any>;
    getFhmeasuringList(search: FhmeasuringSearchVo): Promise<any[]>;
    getFhmeasuringAll(): Promise<any[]>;
    getFhmeasuringAllView(): Promise<any[]>;
}
