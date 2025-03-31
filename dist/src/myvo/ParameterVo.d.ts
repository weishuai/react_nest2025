import { SearchVo } from '../myutils/searchvo';
export declare class ParameterVo {
    id: string;
    name: string;
    key: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isactived: string;
    islocked: string;
    createUid: string;
    updatedUid: string;
}
export declare class ParameterSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
