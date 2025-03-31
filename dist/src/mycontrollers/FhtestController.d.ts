import { FhtestAddVo } from '../myvo/FhtestVo';
export declare class FhtestController {
    private fhtestService;
    createFhtest(fhtestVo: FhtestAddVo): Promise<void>;
    update_Fhtest(Id: string, fhtestVo: FhtestAddVo): Promise<void>;
    removeFhtest(Id: string): Promise<void>;
}
