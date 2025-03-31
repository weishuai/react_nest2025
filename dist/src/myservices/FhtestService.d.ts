import { FhtestAddVo } from '../myvo/FhtestVo';
export declare type UserToken = {
    uid: string;
    jwtid: string;
    app: string;
};
export declare class FhtestService {
    private fhtestRepo;
    findOneFhtest(Id: string): Promise<void>;
    createFhtest(fhtestVo: FhtestAddVo): Promise<void>;
    updateFhtest(Id: string, fhtestVo: FhtestAddVo): Promise<void>;
    removeFhtest(Ids: string[]): Promise<void>;
}
