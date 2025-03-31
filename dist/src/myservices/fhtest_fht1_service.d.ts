import { FhtestFht1SearchVo, FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
export declare class FhtestFht1Service {
    private fhtestFht1Repo;
    findOneFhtestFht1(Id: string): Promise<any>;
    createFhtestFht1(fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").InsertResult>;
    updateaFhtestFht1(Id: string, user_id: string, fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").UpdateResult>;
    removeFhtestFht1(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhtestFht1ById(id: string): Promise<any>;
    getFhtestFht1List(search: FhtestFht1SearchVo): Promise<any[]>;
    getFhtestFht1All(): Promise<any[]>;
    getFhtestFht1AllView(): Promise<any[]>;
}
