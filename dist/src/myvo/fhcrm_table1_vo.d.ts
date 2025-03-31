import { SearchVo } from '../myutils/searchvo';
export declare class FHcrmTable1Vo {
    id: string;
    name: string;
    fhF1?: string;
    fhF2?: string;
    fhF3?: boolean;
    fhF4?: number;
    fhF5?: Date;
    fhF6?: Date;
    fhF7?: Date;
    fhF8?: number;
    fhF9?: number;
    fhF10?: number;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isactived?: string;
    islocked?: string;
    createUid?: string;
    updatedUid?: string;
}
export declare class FHcrmTable1SearchVo extends SearchVo {
    fundType: string;
    status: number;
}
