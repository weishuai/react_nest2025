import { FhtestVo } from '../myvo/fhtest_vo';
export declare class FhtestController {
    private fhtestService;
    createFhtest(fhtestVo: FhtestVo): Promise<import("typeorm").InsertResult>;
    updateaFhtest(userToken: string, Id: string, fhtestVo: FhtestVo): Promise<import("typeorm").UpdateResult>;
    removeFhtest(Id: string): Promise<import("typeorm").UpdateResult>;
    getFhtestById(Id: string): Promise<any>;
    getFhtestList(query: any): Promise<any[]>;
    getFhtestAll(): Promise<any[]>;
    getFhtestAllView(): Promise<any[]>;
}
