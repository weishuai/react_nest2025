import { FhtestSearchVo, FhtestVo } from '../myvo/fhtest_vo';
export declare class FhtestService {
    private fhtestRepo;
    findOneFhtest(Id: string): Promise<any>;
    createFhtest(fhtestVo: FhtestVo): Promise<import("typeorm").InsertResult>;
    updateaFhtest(Id: string, user_id: string, fhtestVo: FhtestVo): Promise<import("typeorm").UpdateResult>;
    removeFhtest(Ids: string): Promise<import("typeorm").UpdateResult>;
    getFhtestById(id: string): Promise<any>;
    getFhtestList(search: FhtestSearchVo): Promise<any[]>;
    getFhtestAll(): Promise<any[]>;
    getFhtestAllView(): Promise<any[]>;
}
