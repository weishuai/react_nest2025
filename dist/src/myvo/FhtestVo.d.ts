import { SearchVo } from '../myutils/searchvo';
export declare class FhtestAddVo {
    fhname: string;
    id: string;
    app: string;
}
export declare class FhtestSearchVo extends SearchVo {
    condoId: string;
    locationCategoryId: string;
    fundType: string;
    status: number;
}
