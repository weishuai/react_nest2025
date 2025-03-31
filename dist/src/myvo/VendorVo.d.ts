import { SearchVo } from '../myutils/searchvo';
export declare class VendorAddVo {
    name: string;
    address: string;
    phone: string;
    email: string;
    timezone: string;
    remarks: string;
    categoryIds: string[];
}
export declare class VendorUpdateVo extends VendorAddVo {
    id: string;
}
export declare class VendorGetVo extends VendorUpdateVo {
    categoryNames: string[];
    createDate: Date;
    categories: string;
}
export declare class VendorSearchVo extends SearchVo {
    fundCategoryId: string;
}
export declare class VendorCategoryVo {
    id: string;
    name: string;
}
export declare class VendorQuoteVo {
    caseId: string;
    description: string;
    status: string;
    projectStatus: number;
    sqDate: Date;
    siteSurvey: number;
    warranty: number;
    quoteAmount: number;
    soqSelected: number;
    raisedDate: Date;
}
export declare class VendorProjectVo {
    projectId: string;
    caseId: string;
    description: string;
    status: string;
    projectStatus: number;
    poDate: Date;
    dueDate: Date;
    amount: number;
    condo: string;
    raisedDate: Date;
    items: string[];
}
