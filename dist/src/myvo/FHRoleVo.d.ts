import { SearchVo } from '../myutils/searchvo';
export declare class FHRoleVo {
    id: string;
    name: string;
    app: string;
    isDefault: number;
    isDel: number;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FHRoleSearchVo extends SearchVo {
    fundType: string;
    status: number;
}
