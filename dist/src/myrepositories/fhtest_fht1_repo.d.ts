import { FhtestFht1SearchVo, FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
export declare class FhtestFht1Repo {
    create(fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").InsertResult>;
    update(Id: string, user_id: string, fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").UpdateResult>;
    remove(Ids: string[]): Promise<import("typeorm").UpdateResult>;
    getFhtestFht1sById(id: string): Promise<any>;
    getFhtestFht1All(): Promise<any[]>;
    getFhtestFht1AllView(): Promise<any[]>;
    getFhtestFht1List(search: FhtestFht1SearchVo): Promise<any[]>;
}
