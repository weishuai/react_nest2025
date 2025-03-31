import { FhtestFht1Vo } from '../myvo/fhtest_fht1_vo';
export declare class FhtestFht1Controller {
    private fhtestFht1Service;
    createFhtestFht1(fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").InsertResult>;
    updateaFhtestFht1(userToken: string, Id: string, fhtestFht1Vo: FhtestFht1Vo): Promise<import("typeorm").UpdateResult>;
    removeFhtestFht1(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhtestFht1ById(Id: string): Promise<any>;
    getFhtestFht1List(query: any): Promise<any[]>;
    getFhtestFht1All(): Promise<any[]>;
    getFhtestFht1AllView(): Promise<any[]>;
}
