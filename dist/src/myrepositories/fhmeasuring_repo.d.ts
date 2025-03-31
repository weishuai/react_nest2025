import { FhmeasuringSearchVo, FhmeasuringVo } from '../myvo/fhmeasuring_vo';
export declare class FhmeasuringRepo {
    create(fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhmeasuringVo: FhmeasuringVo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhmeasuringsById(id: string): Promise<any>;
    getFhmeasuringAll(): Promise<any[]>;
    getFhmeasuringAllView(): Promise<any[]>;
    getFhmeasuringList(search: FhmeasuringSearchVo): Promise<any[]>;
}
